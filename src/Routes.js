import React from "react";
import { Route, Switch } from "react-router-dom";
import Camera from "./Camera";
import CameraRoll from "./CameraRoll";
import PhotoViewer from "./PhotoViewer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/camera" component={Camera} />
      <Route path="/album/:handle" component={PhotoViewer} />
      <Route path="/album/" component={CameraRoll} />
      <Route path="/" component={Camera} />  
    </Switch>
  );
};

export default Routes;
