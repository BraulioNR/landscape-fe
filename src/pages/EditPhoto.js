import React from "react"
import Footer from "../components/footer/Footer"
import { useParams } from "react-router-dom"
import NavBar from "../components/navbar/NavBar"
import EditPhotoPage from "../components/photos/editphoto/EditPhotoPage"
const EditPhoto = () => {
  const { idPhoto } = useParams()
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <EditPhotoPage idPhoto={idPhoto} />
      <Footer />
    </>
  )
}

export default EditPhoto
