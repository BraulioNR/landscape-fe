import React from "react"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import AboutPage from "../components/about/AboutPage"

const About = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <AboutPage />
    </>
  )
}

export default About
