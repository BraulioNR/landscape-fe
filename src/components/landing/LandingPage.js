import React, { useEffect, useState } from "react"
import {
  Button,
  Container,
  TextButton,
  Title,
  DivDepartments,
  DivTitleBox,
} from "./LandingPageElements"

import BoxElement from "../../components/boxphotos/BoxPhotos"
import ModalLogin from "../modal/modallogin/ModalLogin"
import ModalSignUp from "../modal/modalsignup/ModalSignUp"
import { TopRegions } from "../../services/Regions.services"
import LoadingPage from "../loading/LoadingPage"

const LandingPage = () => {
  const [modalLog, setModalLog] = useState(false)
  const [modalSignUP, setModalSignUp] = useState(false)
  const [loading, setLoading] = useState(true)
  const [regions, setRegions] = useState([])
  function toggle(e) {
    e.preventDefault()
    setModalLog(!modalLog)
  }
  function toggleSignUP(e) {
    e.preventDefault()
    setModalSignUp(!modalSignUP)
  }
  function changeBoth(e) {
    setModalSignUp(modalLog)
    setModalLog(!modalLog)
  }

  function IsAuthenticated() {
    if (!localStorage.getItem("token")) {
      return (
        <>
          <Title>
            Find the best settings, the best places for your photographs
          </Title>
          <Button to="/" onClick={toggleSignUP}>
            Create Account
          </Button>
          <ModalSignUp
            modal={modalSignUP}
            toggle={toggleSignUP}
            setModalSignUp={setModalSignUp}
            changeBoth={changeBoth}
          ></ModalSignUp>
          <ModalLogin
            modal={modalLog}
            toggle={toggle}
            setModalLog={setModalLog}
            changeBoth={changeBoth}
          ></ModalLogin>
        </>
      )
    }
    return <Title>Welcome back to Landscape</Title>
  }
  useEffect(() => {
    TopRegions()
      .then((data) => {
        if (data.regions) {
          setRegions(data.regions)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Container>
      <TextButton>
        <IsAuthenticated />
      </TextButton>

      {loading && <LoadingPage></LoadingPage>}
      {!loading && (
        <DivDepartments>
          <DivTitleBox>
            <h3>Discover the best 6 regions</h3>
          </DivTitleBox>
          <BoxElement regions={regions}></BoxElement>
        </DivDepartments>
      )}
    </Container>
  )
}

export default LandingPage
