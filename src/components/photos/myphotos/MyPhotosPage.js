import React, { useEffect, useState } from "react"
import { getMyPhoto } from "../../../services/Photos.services"
import LoadingPage from "../../loading/LoadingPage"
import { Container, DivEmpty, DivTitleBox } from "./MyPhotosPageElements"
import CardBox from "../../cardbox/CardBox.js"

const MyPhotosPage = () => {
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getMyPhoto()
      .then((data) => {
        if (data.photos) {
          setPhotos(data.photos)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  if (loading) return <LoadingPage />
  if (photos.length === 0) {
    return (
      <Container>
        <DivTitleBox>
          <h3>My Photos</h3>
        </DivTitleBox>
        <DivEmpty>
          <h1>No hay fotografias para mostrar</h1>
        </DivEmpty>
      </Container>
    )
  }
  if (!loading) {
    return (
      <Container>
        <DivTitleBox>
          <h3>My Photos</h3>
        </DivTitleBox>
        <CardBox photos={photos} buttonAdd={true} myphoto={true}></CardBox>
      </Container>
    )
  }
}

export default MyPhotosPage
