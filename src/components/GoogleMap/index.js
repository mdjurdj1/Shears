import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

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
