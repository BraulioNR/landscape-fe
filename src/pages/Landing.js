import React from "react"
import LandingPage from "../components/landing/LandingPage"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
const Landing = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <LandingPage />
      <Footer />
    </>
  )
}

export default Landing
