import React from "react"
import Footer from "../components/footer/Footer"
import { useParams } from "react-router-dom"
import RegionPage from "../components/region/regionsingle/RegionPage"
import NavBar from "../components/navbar/NavBar"
const Regions = () => {
  const { idRegion } = useParams()
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <RegionPage idRegion={idRegion} />
      <Footer />
    </>
  )
}

export default Regions
