import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"
import {
  Text,
  Input,
  ButtonSubmit,
  Forget,
  LinkForm,
} from "./ModalLoginElements"
import { logIn } from "../../../services/User.services"
const emptyForm = {
  email: "",
  password: "",
}
const ModalLogin = ({ modal, toggle, setModalLog, changeBoth }) => {
  const [form, setForm] = useState(emptyForm)
  const handleChange = (e) => {
    const valor = e.target.value
    setForm({
      ...form,
      [e.target.name]: valor,
    })
  }

  async function login(e) {
    e.preventDefault()

    logIn(form)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("perfile", data.perfile)
          setModalLog(!modal)
          setForm(emptyForm)
          window.location.reload(false)
        }
      })
      .catch(() => setForm(emptyForm))
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <form onSubmit={login} style={{ textAlign: "center" }}>
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
          <ButtonSubmit type="submit">Sign In</ButtonSubmit>
        </form>
      </ModalBody>
      <ModalFooter style={{ textAlign: "center" }}>
        <LinkForm to="#">
          <Forget>Forgot user or password?</Forget>
        </LinkForm>
        <LinkForm onClick={changeBoth} to="#">
          <Forget>Don't have an account?</Forget>
        </LinkForm>
      </ModalFooter>
    </Modal>
  )
}
export default ModalLogin
