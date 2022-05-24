import React, { useEffect, useState } from "react"
import { showUsers, updateUsers } from "../../services/User.services"
import LoadingPage from "../loading/LoadingPage"
import {
  Container,
  DivData,
  DivForm,
  DivPerfile,
  EmailUser,
  NameUser,
  PerfileImg,
  Title,
  Input,
  Label,
  Row,
  Column,
  RowName,
  Submit,
  ButtonSubmit,
} from "./PerfilPageElements"

const emptyForm = {
  name: "",
  lastName: "",
  device: "",
  email: "",
  password: "",
}
const PerfilePage = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()
  const [form, setForm] = useState(emptyForm)
  useEffect(() => {
    showUsers().then((data) => {
      if (data.user) {
        setUser(data.user)
        setForm(data.user)
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
  async function update(e) {
    e.preventDefault()
    updateUsers(form).then((data) => {
      if (data.user) {
        localStorage.setItem("perfile", data.user.perfile)
        window.location.reload(false)
      }
    })
  }

  if (loading) return <LoadingPage />
  if (!loading && user) {
    return (
      <Container>
        <Title>Profile Settings </Title>
        <DivForm onSubmit={update}>
          <DivPerfile>
            <PerfileImg src={user.perfile}></PerfileImg>
            <NameUser>
              {user.name} {user.lastName}
            </NameUser>
            <EmailUser>{user.email}</EmailUser>
          </DivPerfile>
          <DivData>
            <RowName>
              <Column>
                <Label>Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  pattern="[A-Za-z\s]{1,}"
                  value={form.name}
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </Column>
              <Column>
                <Label>LastName</Label>
                <Input
                  type="text"
                  className="form-control"
                  pattern="[A-Za-z\s]{1,}"
                  placeholder="LastName"
                  value={form.lastName}
                  name="lastName"
                  id="lastLame"
                  onChange={handleChange}
                />
              </Column>
            </RowName>
            <Row>
              <Label>Email</Label>
              <Input
                type="email"
                className="form-control"
                placeholder="enter email"
                value={form.email}
                name="email"
                id="email"
                onChange={handleChange}
              />
            </Row>
            <Row>
              <Label>Password</Label>
              <Input
                type="password"
                className="form-control"
                placeholder="enter password"
                value={form.password}
                name="password"
                id="password"
                onChange={handleChange}
              />
            </Row>
          </DivData>
          <Submit type="submit">Submit</Submit>
        </DivForm>
      </Container>
    )
  }
}

export default PerfilePage
