import React, { useEffect, useState } from "react"
import { GetRegion } from "../../../services/Regions.services"
import CardBox from "../../cardbox/CardBox.js"
import LoadingPage from "../../loading/LoadingPage"
import { Container, DivEmpty, DivTitleBox } from "./RegionPageElements"

const RegionPage = ({ idRegion }) => {
  const [region, setRegion] = useState()
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState()
  useEffect(() => {
    GetRegion({ idRegion })
      .then((data) => {
        if (data.region) {
          setRegion(data.region)
          setPhotos(data.region.photos)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idRegion])
  if (loading) return <LoadingPage />
  if (photos.length === 0) {
    return (
      <Container>
        <DivTitleBox>
          <h3>Region {region.name}</h3>
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
          <h3>Region {region.name}</h3>
        </DivTitleBox>

        <CardBox photos={photos}></CardBox>
      </Container>
    )
  }
}

export default RegionPage
