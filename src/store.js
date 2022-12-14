import * as MapboxGLRedux from "@mapbox/mapbox-gl-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const middleware = MapboxGLRedux.mapMiddleware;

export default createStore(rootReducer, applyMiddleware(middleware));
