import React from "react"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import AllPhotosPage from "../components/photos/allphotos/AllPhotosPage"
const AllPhoto = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <AllPhotosPage />
      <Footer />
    </>
  )
}

export default AllPhoto
