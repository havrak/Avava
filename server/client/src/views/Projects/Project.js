import React from "react";
import { Redirect } from "react-router-dom";
import {toChildLocation} from "service/RoutesHelper";

function Project(props){
   return <Redirect to={toChildLocation("info")} />
}

export default Project;