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
  Input,
  DivTitle,
  ButtonSubmit,
} from "./EditPhotoPageElements"
import { getPhoto, updatePhoto } from "../../../services/Photos.services"
import { Rating } from "@mui/material"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import { allDevices } from "../../../services/Devices.services"
import Swal from "sweetalert2"
import { AllRegions } from "../../../services/Regions.services"
const emptyImg = {
  image: "",
  hdr: false,
  title: "",
  rating: 0,
  lens: "",
  shutterSpeed: "Auto",
  aperture: "",
  iso: "",
  auto: false,
  deviceId: {},
}

const EditPhotoPage = ({ idPhoto }) => {
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const [form, setForm] = useState(emptyImg)
  const [loading, setLoading] = useState(true)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ])
  const [devices, setDevices] = useState([])
  const [regions, setRegions] = useState([])
  const [regionId, setRegionId] = useState()
  let marker
  useEffect(() => {
    allDevices().then((data) => {
      if (data.devices) {
        setDevices(data.devices)
      }
    })
    AllRegions().then((data) => {
      if (data.regions) {
        setRegions(data.regions)
      }
    })
  }, [])

  useEffect(() => {
    getPhoto({ idPhoto })
      .then((data) => {
        if (data.photo) {
          setValueLngLat(data.photo.location)
          setForm({
            ...data.photo,
            regionId: data.photo.region._id,
            location: data.photo.location,
            deviceId: data.photo.device._id,
          })
          setRegionId(data.photo.region._id)

          if (loading) {
            map.current.setCenter(data.photo.location)
            marker = new mapboxgl.Marker()
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

  function handleChange(e) {
    const valor = e.target.value
    setForm({
      ...form,
      [e.target.name]: valor,
    })
  }
  function handleRating(e, rating) {
    setForm({
      ...form,
      rating: rating,
    })
  }
  function handleSwitch(e) {
    const valor = e.target.checked
    setForm({
      ...form,
      [e.target.name]: valor,
    })
  }

  function convert(e) {
    e.preventDefault()
    setForm({
      ...form,
      regionId: regionId,
      location: valueLngLat,
    })
    delete form.device
    delete form.region
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        updatePhoto(idPhoto, form).then((data) => {
          if (data.photo) {
            Swal.fire({
              title: "Successful",
              text: "Photo update successfully",
              icon: "success",
              timer: 3500,
            })
            window.location.href = "/photos/mylist"
          }
        })
      }
    })
  }
  return (
    <Container>
      <DivMedia>
        <DivImg>
          <Img src={form.image}></Img>
        </DivImg>
        <div>
          <DivTitle>
            <Title>{form.title}</Title>
            <Input
              type="text"
              placeholder="Enter Photo's title "
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </DivTitle>
          <Rating name="rating" value={form.rating} onChange={handleRating} />
        </div>
      </DivMedia>
      <DivData>
        <DivExposure>
          <h2>Exposure</h2>
          <Info>
            <ElementDiv>
              <Label>Device</Label>
              <Selected
                className="device"
                name="deviceId"
                onChange={handleChange}
                value={form.deviceId}
              >
                <option value="Selecionar" selected disabled>
                  Device
                </option>
                {devices.map((device) => {
                  return (
                    <option value={device._id} key={device._id}>
                      {device.name}
                    </option>
                  )
                })}
              </Selected>
            </ElementDiv>
            <ElementSwitch>
              <FormControlLabel
                checked={form.auto}
                control={<Switch checked={form.auto} color="primary" />}
                label="Auto"
                name="auto"
                labelPlacement="start"
                onChange={handleSwitch}
              />

              <FormControlLabel
                checked={form.hdr}
                control={<Switch color="primary" />}
                label="HDR"
                name="hdr"
                labelPlacement="start"
                onChange={handleSwitch}
              />
            </ElementSwitch>
            <ElementDiv>
              <Label>shutterSpeed</Label>
              <Selected
                value={form.shutterSpeed}
                name="shutterSpeed"
                onChange={handleChange}
                disabled={form.auto}
              >
                <option value="Auto" selected={form.auto}>
                  Auto
                </option>
                <option value="1/1" selected={!form.auto}>
                  1/1
                </option>
                <option value="1/2">1/2</option>
                <option value="1/10">1/10</option>
                <option value="1/30">1/30</option>
                <option value="1/60">1/60</option>
                <option value="1/125">1/125</option>
                <option value="1/200">1/200</option>
                <option value="1/250">1/250</option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>aperture</Label>
              <Selected
                value={form.aperture}
                name="aperture"
                onChange={handleChange}
                disabled={form.auto}
              >
                <option value="Auto" selected={form.auto}>
                  Auto
                </option>
                <option value="f/2.8" selected={!form.auto}>
                  f/2.8
                </option>
                <option value="f/4">f/4</option>
                <option value="f/5.6">f/5.6</option>
                <option value="f/8">f/8</option>
                <option value="f/11">f/11</option>
                <option value="f/16">f/16</option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>lens</Label>
              <Selected
                value={form.lens}
                name="lens"
                onChange={handleChange}
                disabled={form.auto}
              >
                <option value="Auto" selected={form.auto}>
                  Auto
                </option>
                <option value="Wide" selected={!form.auto}>
                  Wide
                </option>
                <option value="UW">UW</option>
                <option value="Macro">Macro</option>
              </Selected>
            </ElementDiv>
            <ElementDiv>
              <Label>Iso</Label>
              <Selected
                value={form.iso}
                name="iso"
                onChange={handleChange}
                disabled={form.auto}
              >
                <option value="Auto" selected={form.auto}>
                  Auto
                </option>
                <option value="100" selected={!form.auto}>
                  100
                </option>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="800" selected={!form.auto}>
                  800
                </option>
                <option value="1600">1600</option>
                <option value="3200">3200</option>
              </Selected>
            </ElementDiv>
          </Info>
        </DivExposure>
        <DivLocation>
          <h2>Location</h2>
          <Divmap ref={mapContainer} id="map"></Divmap>
        </DivLocation>
      </DivData>
      <ButtonSubmit onClick={convert}>Save</ButtonSubmit>
    </Container>
  )
}
export default EditPhotoPage
