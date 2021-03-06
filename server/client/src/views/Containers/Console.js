import React, { Component } from "react";
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { ResizeObserver } from "resize-observer";
import { connect } from "react-redux";
import { createTerminalSocket } from "api/WebSockets";
import { getCurrentProjectAndContainer } from "service/RoutesHelper";
import * as UserApi from "api/index";

const api = new UserApi.DefaultApi();

class Console extends Component {
   constructor({ projectId, instanceId }) {
      super();
      // projectId = 18;
      // instanceId = 142;
      this.projectId = projectId;
      this.instanceId = instanceId;
   }

   async componentDidMount() {
      const term = new Terminal(this.dimensions());
      term.open(this.termElm);
      const successConsoleCreationCallback = (error, data, response) => {
         data = response?.body;
         this.term = term;

         // let shouldOutput = true;

         this.terminalSocket = createTerminalSocket(data.terminal);
         this.terminalSocket.onopen = () => {
            // term.attach(socket);
            // term.onKey((key) => {
            //    console.log(key.domEvent);
            //    key.domEvent.stopPropagation();
            //    key.domEvent.preventDefault();
            // });
            term.onData((data) => {
               this.terminalSocket.send(data);
            });
            this.terminalSocket.onmessage = (data) => {
               // if (shouldOutput) {
               term.write(data.data);
               // } else {
               //    shouldOutput = true;
               // }
            };
            term._initialized = true;
         };

         this.controlSocket = createTerminalSocket(data.control);
         this.controlSocket.onopen = () => {
            // term.attach(socket);
            this.controlSocket.onmessage = (d) => {
               console.log(d, "controlSocketOutput");
            };
            const ro = new ResizeObserver(async () => {
               this.resizeToAdequatedDimensions();
            });
            setTimeout((e) => {
               this.resizeToAdequatedDimensions();
            }, 1000);
            ro.observe(this.termElm);
         };
      };
      api.instancesInstanceIdConsoleGet(this.instanceId, successConsoleCreationCallback);
   }

   resizeToAdequatedDimensions() {
      const dimensions = this.dimensions();
      // console.log(dimensions, "resized");
      this.controlSocket.send(
         JSON.stringify({
            command: "window-resize",
            args: {
               width: dimensions.cols.toString(),
               height: dimensions.rows.toString(),
            },
         })
      );
      this.term.resize(dimensions.cols, dimensions.rows);
   }

   componentWillUnmount() {
      this.terminalSocket?.close();
      this.controlSocket?.close();
   }

   dimensions() {
      if (this.termElm != null) {
         return {
            cols: Math.round(this.termElm.clientWidth / 9),
            rows: Math.round(window.innerHeight / 17.6 - 12),
         };
      } else {
         return {
            cols: Math.round(window.innerWidth / 9 - 1),
            rows: Math.round(window.innerHeight / 17.6 - 10),
         };
      }
      // cols: Math.round(window.innerWidth / 9 - 1),
      // rows: Math.round(window.innerHeight / 17.6 - 1),
   }

   render() {
      if (!this.currentContainer) {
      }
      return (
         <div className="App">
            <div style={{ backgroundColor: "black" }}>
               <div
                  ref={(ref) => {
                     this.termElm = ref;
                  }}
               ></div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const { currentProject, currentContainer } = getCurrentProjectAndContainer(
      state.combinedUserData.userProjects.projects
   );
   return {
      projectId: currentProject.id,
      instanceId: currentContainer.id,
   };
};

export default connect(mapStateToProps, null)(Console);
