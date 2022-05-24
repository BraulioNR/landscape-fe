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
  LabelImg,
  InputImg,
  Input,
  DivTitle,
  ButtonSubmit,
} from "./CreatePhotoElements"
import { createPhoto } from "../../../services/Photos.services"
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
import { getAddress } from "../../../services/mapbox.services"
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

const CreatePhotoPage = () => {
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const [form, setForm] = useState(emptyImg)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ])
  const [devices, setDevices] = useState([])
  const [regions, setRegions] = useState([])
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const formData = new FormData()
  const [regionId, setRegionId] = useState()
  const [show, setShow] = useState(false)
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
    getAddress(valueLngLat[0], valueLngLat[1]).then((data) => {
      const feature = data.features[0]
      const context = feature.context
      const region_context = context[2].text
      if (regions) {
        regions.map((region) => {
          if (region.name == region_context) {
            setRegionId(region._id)
          }
          return null
        })
      }
    })
  }, [regions, valueLngLat])
  useEffect(() => {
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

    map.current.on("click", function (e, geocoder) {
      setValueLngLat([
        (valueLngLat[0] = Object.values(e.lngLat)[0]),
        (valueLngLat[1] = Object.values(e.lngLat)[1]),
      ])
      if (marker == null) {
        marker = new mapboxgl.Marker().setLngLat(valueLngLat).addTo(map.current)
      } else {
        marker.setLngLat(valueLngLat)
      }
      setShow(true)
    })
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
  function handleImg(file) {
    const fileRider = new FileReader()
    fileRider.addEventListener("load", (e) => setPreview(e.target.result))
    fileRider.readAsDataURL(file)
  }
  function convert(e) {
    e.preventDefault()
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value)
    }
    formData.append("regionId", regionId)
    formData.append("location", valueLngLat)
    if (file) {
      formData.append("image", file, file.filename)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must select an image!",
        timer: 3500,
      })
      return
    }
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        createPhoto(formData).then((data) => {
          if (data.photo) {
            Swal.fire({
              title: "Successful",
              text: "Photo created successfully",
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
          <LabelImg htmlFor="input-img">
            {preview ? "Change" : "Select image"}
          </LabelImg>
          <InputImg
            name="input-img"
            type="file"
            id="input-img"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0])
              handleImg(e.target.files[0])
            }}
          ></InputImg>
          {preview && <Img src={preview} alt="preview" />}
        </DivImg>
        <div>
          <DivTitle>
            <Title>{form.title}</Title>
            <Input
              type="text"
              placeholder="Enter Photo's title "
              name="title"
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
      {show && <ButtonSubmit onClick={convert}>Enviar</ButtonSubmit>}
    </Container>
  )
}
export default CreatePhotoPage
