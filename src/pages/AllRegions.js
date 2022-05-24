import React from "react"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import AllRegionPage from "../components/region/allregion/AllRegions"
const AllRegion = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <AllRegionPage />
      <Footer />
    </>
  )
}

export default AllRegion
