import React from "react"
import NavBar from "../components/navbar/NavBar"
import Footer from "../components/footer/Footer"
import MyPhotosPage from "../components/photos/myphotos/MyPhotosPage"
const MyPhoto = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <MyPhotosPage />
      <Footer />
    </>
  )
}

export default MyPhoto
