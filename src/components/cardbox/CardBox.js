import { Add, BoxCard, Container, DivButton } from "./CardBoxElements"
import Card from "./components/Card"
import CreateSvg from "../../assets/images/create.svg"

const CardBox = ({ photos, buttonAdd, myphoto = false }) => {
  const token = localStorage.getItem("token")
  if (token) {
    buttonAdd = true
  }
  function Create(e) {
    e.preventDefault()
    window.location.href = "/photos/create"
  }
  return (
    <Container>
      <DivButton>
        {buttonAdd && (
          <>
            <Add onClick={Create}>
              <img src={CreateSvg} alt="CreateButton.svg"></img>
            </Add>
          </>
        )}
      </DivButton>
      <BoxCard
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {photos.map((photo) => (
          <Card key={photo._id} photo={photo} myphoto={myphoto}></Card>
        ))}
      </BoxCard>
    </Container>
  )
}

export default CardBox
