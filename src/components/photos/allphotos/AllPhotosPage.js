import React, { useEffect, useState } from "react"
import { allPhotos } from "../../../services/Photos.services"
import LoadingPage from "../../loading/LoadingPage"
import { Container, DivEmpty, DivTitleBox } from "./AllPhotosPageElements"
import CardBox from "../../cardbox/CardBox.js"

const AllPhotosPage = () => {
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    allPhotos()
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
          <h3>All Photos</h3>
        </DivTitleBox>
        <DivEmpty>
          <h1 style={{ color: "white" }}>No hay fotografias para mostrar</h1>
        </DivEmpty>
      </Container>
    )
  }
  if (!loading) {
    return (
      <Container>
        <DivTitleBox>
          <h3>All Photos</h3>
        </DivTitleBox>
        <CardBox photos={photos}></CardBox>
      </Container>
    )
  }
}

export default AllPhotosPage
