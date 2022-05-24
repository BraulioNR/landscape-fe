import React from "react"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import CreatePhotoPage from "../components/photos/createphoto/CreatePhoto"
const CreatePhoto = () => {
  const token = localStorage.getItem("token")
  let isAuth = false
  if (token) {
    isAuth = true
  }
  return (
    <>
      <NavBar isAuth={isAuth} />
      <CreatePhotoPage />
      <Footer />
    </>
  )
}

export default CreatePhoto
