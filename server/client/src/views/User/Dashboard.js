import React, { useEffect } from "react";
import { combinedDataGet } from "actions/UserActions";
import { setCustomizableBrandText } from "actions/FrontendActions";
// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import {
   CPUCircularStateChartCard,
   RAMCircularStateChartCard,
   DiskCircularStateChartCard,
   UploadCircularStateChartCard,
   DownloadCircularStateChartCard,
} from "components/Cards/State/CurrentStateCards.js";
import { ContainerCounter, ProjectCounter } from "components/Cards/Counters.js";
import { connect } from "react-redux";

function Dashboard({ user, state, limits, combinedDataGet, setCustomizableBrandText }) {
   const brand = [
      {
         text: "Dashboard",
      },
   ];
   useEffect(() => {
      setCustomizableBrandText(brand);
   });
   useEffect(() => {
      combinedDataGet();
   }, []);
   return (
      <>
         <Container fluid>
            <Row>
               <Col lg="6" sm="12">
                  <Link to="/user/projects" className="card-link">
                     <ProjectCounter projects={state.projects} />
                  </Link>
               </Col>
               <Col lg="6" sm="12">
                  {/* <Link to="/user" className="card-link"> */}
                  <ContainerCounter containers={state.containers} />
                  {/* </Link> */}
               </Col>
            </Row>
            <Row>
               <Col sm="6" md="4" lg="4" xl="4" className="col-xxl-5-group">
                  <DiskCircularStateChartCard disk={state.disk} max={limits.disk} />
               </Col>
               <Col sm="6" md="4" lg="4" xl="4" className="col-xxl-5-group">
                  <CPUCircularStateChartCard CPU={state.CPU} max={limits.CPU} />
               </Col>
               <Col sm="12" md="4" lg="4" xl="4" className="col-xxl-5-group">
                  <RAMCircularStateChartCard RAM={state.RAM} max={limits.RAM} />
               </Col>
               <Col sm="6" md="6" lg="6" xl="6" className="col-xxl-5-group">
                  <DownloadCircularStateChartCard
                     download={state.internet.download}
                     max={limits.internet.download}
                  />
               </Col>
               <Col sm="6" md="6" lg="6" xl="6" className="col-xxl-5-group">
                  <UploadCircularStateChartCard
                     upload={state.internet.upload}
                     max={limits.internet.upload}
                  />
               </Col>
               {/* <Col sm="12" md="4" lg="4" xl="4">
                     <NumberOfProcessesCard numberOfProcesses={1}/>
                  </Col> */}
               {/* <Col sm="12" md="4" lg="4" xl="4">
                  <Card className="card-dashboard">
                     <Card.Header>
                        <Card.Title as="h4">History</Card.Title>
                     </Card.Header>
                     <Card.Body className="p-0">
                        <Container fluid>
                           <Link to="history" className="card-link">
                              <span className="to-underline">
                                 Click here to see state logs
                              </span>
                           </Link>
                        </Container>
                     </Card.Body>
                  </Card>
               </Col> */}
               {/* <Col sm="12" md="4" lg="4" xl="4">
                  <Card className="card-dashboard">
                     <Card.Header>
                        <Card.Title as="h4">
                           <span style={{ marginRight: "14px" }}>
                              <i className="fas fa-wallet" />
                           </span>
                           <span>Wallet</span>
                           <div className="float-right">
                              <div className="numbers">
                                 <Card.Title className="float-right" as="h4">
                                    {user.coins}
                                    <i className="fas fa-money-bill-alt ml-1 mr-1" />
                                 </Card.Title>
                                 <br />
                              </div>
                           </div>
                        </Card.Title>
                     </Card.Header>
                     <Card.Body className="p-0">
                        <Container fluid>
                           <span className="to-underline">
                              <Link to="/user" className="card-link">
                                 <span className="to-underline">Top up credit</span>
                              </Link>
                              <br />
                              <Link to="/user" className="card-link">
                                 <span className="to-underline">Buy more resources</span>
                              </Link>
                           </span>
                        </Container>
                     </Card.Body>
                  </Card>
               </Col> */}
            </Row>
         </Container>
      </>
   );
}

const mapStateToProps = (state) => {
   return {
      user: state.combinedUserData.user,
      state: state.combinedUserData.userProjects.state,
      limits: state.combinedUserData.userProjects.limits,
   };
};

const mapDispathToProps = (dispatch) => {
   return {
      setCustomizableBrandText: (text) => {
         dispatch(setCustomizableBrandText(text));
      },
      combinedDataGet: () => {
         dispatch(combinedDataGet());
      },
   };
};

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);
