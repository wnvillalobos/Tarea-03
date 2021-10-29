import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";

import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: -36.739055, lng: -71.0574941 },
    zoom: 6,
    data,
  });

  const location = useLocation();
  const history = useHistory();

  return (

    <map  >
        <h1> Mapa en vivo flota de camiones </h1>
    <map  class = "Mapa">
    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.venues} />
    </Map>
    </map>
    <div class = "Centro" >
        <h1> Centro de control</h1>
      </div>
      <div class = "Info" >
              <h1> Informacion camiones</h1>
        </div>
    </map>


  );
};

export default MapView;
