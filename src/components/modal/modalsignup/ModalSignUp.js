import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"
import {
  Text,
  Input,
  ButtonSubmit,
  Forget,
  LinkForm,
  Select,
  Option,
} from "./ModalSignUpElements"
import { postUsers } from "../../../services/User.services"
import { allDevices } from "../../../services/Devices.services"
const emptyForm = {
  name: "",
  lastName: "",
  device: "",
  email: "",
  password: "",
}
const ModalSignUp = ({ modal, toggle, setModalSignUp, changeBoth }) => {
  const [form, setForm] = useState(emptyForm)
  const [devices, setDevices] = useState([])

  useEffect(() => {
    allDevices().then((data) => {
      if (data.devices) {
        setDevices(data.devices)
      }
    })
  }, [])
  const handleChange = (e) => {
    const valor = e.target.value
    setForm({
      ...form,
      [e.target.name]: valor,
    })
  }
  const handleChangeSelect = (e, device) => {
    setForm({
      ...form,
      device: device._id,
    })
  }

  async function signUp(e) {
    e.preventDefault()
    postUsers(form).then((data) => {
      if (data.token) {
        setForm(emptyForm)
        window.location.reload(false)
      }
    })
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
      <ModalBody>
        <form onSubmit={signUp} style={{ textAlign: "center" }}>
          <Text htmlFor="name">Name</Text>
          <Input
            placeholder="Enter your name"
            pattern="[A-Za-z]{1,}"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <Text htmlFor="lastName">LastName</Text>
          <Input
            placeholder="Enter your lastname"
            pattern="[A-Za-z]{1,}"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <Text htmlFor="email">Email</Text>
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <Text htmlFor="password">Password</Text>
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <Text htmlFor="device">Device</Text>

          {devices.lenght !== 0 && (
            <Select
              options={devices}
              getOptionLabel={(option) => option.name}
              autoComplete
              includeInputInList
              name="device"
              id="device"
              onChange={handleChangeSelect}
              renderInput={(params) => (
                <Option
                  {...params}
                  variant="standard"
                  placeholder="Select device"
                />
              )}
            />
          )}

          <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
        </form>
      </ModalBody>
      <ModalFooter style={{ textAlign: "center" }}>
        <LinkForm to="#" onClick={changeBoth}>
          <Forget>Already has account?</Forget>
        </LinkForm>
      </ModalFooter>
    </Modal>
  )
}
export default ModalSignUp
