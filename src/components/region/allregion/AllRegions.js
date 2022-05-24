import React, { useEffect, useState } from "react"
import { AllRegions } from "../../../services/Regions.services"
import BoxElement from "../../boxphotos/BoxPhotos"
import LoadingPage from "../../loading/LoadingPage"
import { Container, DivDepartments, DivTitleBox } from "./AllRegionsElements"

const AllRegionPage = () => {
  const [loading, setLoading] = useState(true)
  const [regions, setRegions] = useState([])
  useEffect(() => {
    AllRegions()
      .then((data) => {
        if (data.regions) {
          setRegions(data.regions)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <Container>
      {loading && <LoadingPage></LoadingPage>}
      {!loading && (
        <DivDepartments>
          <DivTitleBox>
            <h3>Regions of Perú</h3>
          </DivTitleBox>
          <BoxElement regions={regions}></BoxElement>
        </DivDepartments>
      )}
    </Container>
  )
}

export default AllRegionPage
