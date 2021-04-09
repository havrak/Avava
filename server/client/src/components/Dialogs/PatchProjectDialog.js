

import React, { useState } from "react";
//source: https://github.com/tannerlinsley/react-table/tree/master/examples/material-UI-kitchen-sink
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

import {projectIdPatch} from 'actions/ProjectActions';
import _ from 'lodash';

import { InputSliderWithSwitch } from "components/Form/Slider.js";
import {
   ramToMB,
   diskToGB,
   CPUToMHz,
   networkSpeedToMbits,
   ramFromMBToB,
   diskFromGBToB,
   CPUFromMHzToHz,
   networkSpeedFromMBitsToBits,
} from "service/UnitsConvertor.js";

const PatchProjectDialog = ({
   patchedProject,
   currentProject,
   userProjects,
   projectIdPatch,
   notify,
   open,
   setOpen,
}) => {
   const { projects, state } = userProjects;
   const [errorMessage, setErrorMessage] = React.useState(null);

   const handleClose = () => {
      setOpen(false);
   };

   const handleAdd = (event) => {
      const isThereANameError = checkForProjectNameErrors();
      if (isThereANameError) {
         return;
      }
      if (patchedProject.current.limits.RAM) {
         patchedProject.current.limits.RAM = ramFromMBToB(
            patchedProject.current.limits.RAM
         );
      }
      if (patchedProject.current.limits.CPU) {
         patchedProject.current.limits.CPU = CPUFromMHzToHz(
            patchedProject.current.limits.CPU
         );
      }
      if (patchedProject.current.limits.disk) {
         patchedProject.current.limits.disk = diskFromGBToB(
            patchedProject.current.limits.disk
         );
      }
      if (patchedProject.current.limits.internet.download) {
         patchedProject.current.limits.internet.download = networkSpeedFromMBitsToBits(
            patchedProject.current.limits.internet.download
         );
      }
      if (patchedProject.current.limits.internet.upload) {
         patchedProject.current.limits.internet.upload = networkSpeedFromMBitsToBits(
            patchedProject.current.limits.internet.upload
         );
      }
      projectIdPatch(patchedProject.current, notify);
      setOpen(false);
   };

   const handleNameType = (event) => {
      patchedProject.current.name = event.target.value;
      checkForProjectNameErrors();
   };

   const checkForProjectNameErrors = () => {
      if (patchedProject.current.name !== currentProject.name && projects.map((item) => item.name).includes(patchedProject.current.name)) {
         setErrorMessage("There is already project with this name present.");
         return true;
      } else if (patchedProject.current.name === "") {
         setErrorMessage("Must not be empty");
         return true;
      } else if (patchedProject.current.name.length >= 30) {
         setErrorMessage("Name must be shorter than 30 characters");
         return true;
      } else if (errorMessage) {
         setErrorMessage(null);
         return true;
      }
      return false;
   };

   const convertedRAM = ramToMB(state.RAM.free);
   const convertedCPU = CPUToMHz(state.CPU.free);
   const convertedDisk = diskToGB(state.disk.free);
   const convertedUpload = networkSpeedToMbits(state.internet.upload.free);
   const convertedDownload = networkSpeedToMbits(state.internet.download.free);

   return (
      <div>
         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Settings</DialogTitle>
            <DialogContent>
               <TextField
                  autoFocus
                  error={errorMessage !== null}
                  margin="dense"
                  label="Project Name"
                  type="text"
                  fullWidth
                  onChange={handleNameType}
                  defaultValue={currentProject.name}
                  style={{ marginBottom: "20px" }}
                  helperText={errorMessage}
               />
               <h3 className={"limits-headding"}>Limits</h3>
               <InputSliderWithSwitch
                  headding={"RAM"}
                  setValueToParentElement={(value) => {
                     patchedProject.current.limits.RAM = value;
                  }}
                  min={0}
                  initialValue={ramToMB(currentProject?.limits?.RAM)}
                  max={convertedRAM}
                  unit={"MB"}
                  helperTooltipText={"Guarantee"}
               />
               <InputSliderWithSwitch
                  headding={"CPU"}
                  min={0}
                  setValueToParentElement={(value) => {
                     patchedProject.current.limits.CPU = value;
                  }}
                  initialValue={CPUToMHz(currentProject?.limits?.CPU)}
                  max={convertedCPU}
                  unit={"MHz"}
               />
               <InputSliderWithSwitch
                  headding={"Disk"}
                  min={diskToGB(currentProject.state.disk.usage)}
                  setValueToParentElement={(value) => {
                     patchedProject.current.limits.disk = value;
                  }}
                  initialValue={diskToGB(currentProject?.limits?.disk)}
                  max={convertedDisk}
                  unit={"GB"}
               />
               <InputSliderWithSwitch
                  headding={"Upload"}
                  min={0}
                  setValueToParentElement={(value) => {
                     patchedProject.current.limits.internet.download = value;
                  }}
                  initialValue={networkSpeedToMbits(currentProject?.limits?.internet.download)}
                  max={convertedUpload}
                  unit={"Mbit/s"}
               />
               <InputSliderWithSwitch
                  headding={"Download"}
                  min={0}
                  setValueToParentElement={(value) => {
                     patchedProject.current.limits.internet.upload = value;
                  }}
                  initialValue={networkSpeedToMbits(currentProject?.limits?.internet.upload)}
                  max={convertedDownload}
                  unit={"Mbit/s"}
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
               <Button onClick={handleAdd} color="primary">
                  Update
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      userProjects: state.combinedUserData.userProjects,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      projectIdPatch: (project, notify) => {
         dispatch(projectIdPatch(project, notify));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatchProjectDialog);