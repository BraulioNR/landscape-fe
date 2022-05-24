import React from "react"
import Footer from "../components/footer/Footer"
import { useParams } from "react-router-dom"
import PhotoPage from "../components/photos/photosingle/PhotoSinglePage"
import NavBar from "../components/navbar/NavBar"
const Photo = () => {
  const { idPhoto } = useParams()
  const token = localStorage.getItem("token")
  let isAuth = false
  // <PhotoPage idPhoto={idPhoto} />
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <PhotoPage idPhoto={idPhoto} />
      <Footer />
    </>
  )
}

export default Photo
