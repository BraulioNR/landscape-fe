import React from "react"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import PerfilePage from "../components/perfile/PerfilePage"
const Perfile = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <PerfilePage />
      <Footer />
    </>
  )
}

export default Perfile
