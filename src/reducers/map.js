import * as MapboxGLRedux from "@mapbox/mapbox-gl-redux";

const MapActionTypes = MapboxGLRedux.MapActionTypes;

const initalState = {};

export default (state = initalState, action) => {
  const map = action.map;
  switch (action.type) {
    case MapActionTypes.zoomend:
      return {
        ...state,
        zoom: map.getZoom().toFixed(2)
      };
    default:
      return state;
  }
};
