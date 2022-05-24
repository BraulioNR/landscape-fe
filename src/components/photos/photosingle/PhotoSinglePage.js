import React, { useRef, useEffect, useState } from "react"
import {
  Container,
  DivImg,
  DivData,
  DivExposure,
  DivLocation,
  Img,
  Title,
  DivMedia,
  ElementDiv,
  Selected,
  Info,
  ElementSwitch,
  Label,
  Divmap,
} from "./PhotoSinglePageElements"
import { getPhoto } from "../../../services/Photos.services"
import { Rating } from "@mui/material"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
const emptyImg = {
  image: "",
  hdr: false,
  title: "",
  rating: 1,
  lens: "",
  shutterSpeed: "",
  aperture: "",
  iso: "",
  auto: false,
  device: {
    name: "",
  },
}

const PhotoSinglePage = ({ idPhoto }) => {
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const [loading, setLoading] = useState(true)
  const [photo, setPhoto] = useState(emptyImg)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ])

  useEffect(() => {
    getPhoto({ idPhoto })
      .then((data) => {
        if (data.photo) {
          setPhoto(data.photo)
          setValueLngLat(data.photo.location)
          if (loading) {
            map.current.setCenter(data.photo.location)
            const marker = new mapboxgl.Marker()
              .setLngLat(data.photo.location)
              .addTo(map.current)

            setLoading(false)
            return marker
          }
        }
      })
      .finally(() => {})

    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: valueLngLat,
      zoom: 14,
    })
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      zoom: 14,
      marker: false,
    })
    map.current.addControl(geocoder)
    map.current.addControl(new mapboxgl.NavigationControl())
    map.current.addControl(new mapboxgl.FullscreenControl())
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: false,
      })
    )
  }, [])
  return (
    <Container>
      <DivMedia>
        <DivImg>
          <Img src={photo.image}></Img>
        </DivImg>
        <Title>{photo.title}</Title>
        <Rating name="read-only" value={photo.rating} readOnly />
      </DivMedia>
      <DivData>
        <DivExposure>
          <h2>Exposure</h2>
          <Info>
            <ElementDiv>
              <Label>Device</Label>
              <Selected className="device" value={photo.device.name} disabled>
                <option value={photo.device.name} selected>
                  {photo.device.name}
                </option>
              </Selected>
            </ElementDiv>
            <ElementSwitch>
              <FormControlLabel
                checked={photo.auto}
                disabled
                control={<Switch color="primary" />}
                label="Auto"
                labelPlacement="start"
              />

              <FormControlLabel
                style={{ color: "white" }}
                checked={photo.hdr}
                disabled
                control={<Switch color="primary" />}
                label="HDR"
                labelPlacement="start"
              />
            </ElementSwitch>
            <ElementDiv>
              <Label>shutterSpeed</Label>
              <Selected value={photo.shutterSpeed} disabled>
                <option value={photo.shutterSpeed} selected>
                  {photo.shutterSpeed}
                </option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>aperture</Label>
              <Selected value={photo.aperture} disabled>
                <option value={photo.aperture} selected>
                  {photo.aperture}
                </option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>lens</Label>
              <Selected value={photo.lens} disabled>
                <option value={photo.lens} selected>
                  {photo.lens}
                </option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>Iso</Label>
              <Selected value={photo.iso} disabled>
                <option value={photo.iso} selected>
                  {photo.iso}
                </option>
              </Selected>
            </ElementDiv>
          </Info>
        </DivExposure>
        <DivLocation>
          <h2>Location</h2>
          <Divmap ref={mapContainer} id="map"></Divmap>
        </DivLocation>
      </DivData>
    </Container>
  )
}
export default PhotoSinglePage
