import React from 'react';
import ReactDOM from 'react-dom';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
  {props.markers.map((marker, index) => (
    <Marker
      {...marker}
      onRightClick={() => props.onMarkerRightClick(index)}
    />
  ))}
  </GoogleMap>
)));

export default GettingStartedGoogleMap
