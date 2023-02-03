import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadScript,
  GoogleMap,
  StandaloneSearchBox,
  MarkerF,
} from "@react-google-maps/api";
import Button from "../components/Button";
import LoadingBox from "../components/LoadingBox";
import Axios from "axios";
import { useDispatch } from "react-redux";
import {
  USER_ADDRESS_MAP_CONFIRM,
  // USER_ADDRESS_MAP_RESET,
} from "../constants/userConstants";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:4000";

const libs = ["places"];
const defaultLocation = { lat: 45.516, lng: -73.56 };

const MapScreen = () => {
  const [googleApiKey, setGoogleApiKey] = useState();
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await Axios(`${BASE_URL}/api/config/google`);
      setGoogleApiKey(data?.data?.key);
      getUserCurrentLocation();
    };
    if (window.google === undefined || !googleApiKey) {
      fetch();
    }
  }, [googleApiKey]);
  const onLoad = (map) => {
    mapRef.current = map;
  };
  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };
  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };
  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };
  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({
      lat: place.lat(),
      lng: place.lng(),
    });
    setLocation({
      lat: place.lat(),
      lng: place.lng(),
    });
  };

  const onConfirm = () => {
    const places = placeRef.current.getPlaces();
    if (places && places.length === 1) {
      const region_name = places[0]?.address_components.filter((region) => {
        return region?.types[0] === "administrative_area_level_1";
      });
      const city_name = places[0]?.address_components.filter((city) => {
        return city?.types[0] === "administrative_area_level_2";
      });
      dispatch({
        type: USER_ADDRESS_MAP_CONFIRM,
        payload: {
          lat: location.lat,
          lng: location.lng,
          address: places[0].formatted_address,
          name: places[0].name,
          city: city_name?.[0]?.long_name,
          region: region_name?.[0]?.long_name,
          vicinity: places[0].vicinity,
          googleAddressId: places[0].id,
        },
      });
      alert("Location successfully selected");
      navigate("/shipping");
    } else {
      alert("Please enter your address");
    }
  };

  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };
  return googleApiKey ? (
    <div
      style={{
        margin: "-1rem",
        height: "calc(100vh + 2rem)",
      }}
    >
      <LoadScript libraries={libs} googleMapsApiKey={googleApiKey}>
        <GoogleMap
          id="smaple-map"
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onIdle={onIdle}
        >
          <StandaloneSearchBox
            onLoad={onLoadPlaces}
            onPlacesChanged={onPlacesChanged}
          >
            <div
              style={{
                boxSizing: "border-box",
                position: "absolute",
                left: "0",
                right: "0",
                margin: "0.5rem auto",
                width: "25rem",
                height: "4rem",
                display: "flex",
              }}
            >
              <input
                type="text"
                placeholder="Enter your address"
                style={{ borderRadius: "1rem 0 0 1rem", borderRight: "0" }}
              ></input>
              <Button
                primary
                onClick={onConfirm}
                className="p-[19px] border-l-0 rounded-l-none"
              >
                Confirm
              </Button>
            </div>
          </StandaloneSearchBox>
          <MarkerF position={location} onLoad={onMarkerLoad}></MarkerF>
        </GoogleMap>
      </LoadScript>
    </div>
  ) : (
    <LoadingBox />
  );
};

export default MapScreen;
