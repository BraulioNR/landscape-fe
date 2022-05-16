import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"
import {
  Text,
  Input,
  ButtonSubmit,
  Forget,
  LinkForm,
} from "./ModalSignUpElements"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../../services/User.services"
const emptyForm = {
  name: "",
  lastName: "",
  phoneNumber: "",
  location: [],
  email: "",
  password: "",
}
const ModalSignUp = ({ modal, toggle, setModalSignUp, changeBoth }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)

  async function signUp(e) {
    e.preventDefault()
    logIn(form).then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token)
        setForm(emptyForm)
        navigate("/home")
      }
    })
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
      <ModalBody>
        <form onSubmit={signUp} style={{ textAlign: "center" }}>
          <Text htmlFor="email">Email</Text>
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => console.log("Change")}
          />
          <Text htmlFor="password">Password</Text>
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => console.log("Change")}
          />
          <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
        </form>
      </ModalBody>
      <ModalFooter style={{ textAlign: "center" }}>
        <LinkForm to="/" onClick={changeBoth}>
          <Forget>Already has account?</Forget>
        </LinkForm>
      </ModalFooter>
    </Modal>
  )
}
export default ModalSignUp
