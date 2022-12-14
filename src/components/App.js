import React from "react";
import * as MapboxGLRedux from "@mapbox/mapbox-gl-redux";
import Map from "./Map";

const ReduxMapControl = MapboxGLRedux.ReduxMapControl;
const container = "mapbox-map";
const control = new ReduxMapControl(container);

const App = () => {
  return (
    <div>
      <Map control={control} container={container} />
    </div>
  );
};

export default App;
