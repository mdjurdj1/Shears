import React from 'react';
import ReactDOM from 'react-dom';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={18}
    defaultCenter={{ lat: 40.741750, lng:  -73.980208 }}
    onClick={props.onMapClick}
  >
  {props.markers.map((marker, index) => (
    <Marker
      {...marker}
      onRightClick={() => props.onMarkerRightClick(index)}
    />
  ))}
  </GoogleMap>
));

export default GettingStartedGoogleMap
