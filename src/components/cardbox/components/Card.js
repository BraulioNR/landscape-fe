import React from "react"
import Rating from "@mui/material/Rating"
import {
  CardSC,
  CardCont,
  CardImg,
  CardPhoto,
  Typo,
  LinkCard,
  Actions,
  Edit,
  Delete,
} from "./CardElements"
import DeletePhoto from "../../../helpers/DeleteEvent"

const Card = ({ photo, myphoto }) => {
  return (
    <CardSC>
      <LinkCard to={`/photos/${photo._id}`} key={photo._id}>
        <CardPhoto sx={{ maxWidth: 345, maxHeight: 340, minWidth: 345 }}>
          <CardImg
            component="img"
            image={photo.image}
            style={{ minHeight: 230.35 }}
            alt={photo.title}
          />
          <CardCont>
            <Typo gutterBottom variant="h5" component="div">
              {photo.title}
            </Typo>
            <Rating name="read-only" value={photo.rating} readOnly />
          </CardCont>
        </CardPhoto>
      </LinkCard>
      <Actions>
        {myphoto && (
          <Edit
            onClick={() => {
              window.location.href = `/photos/edit/${photo._id}`
            }}
          ></Edit>
        )}
        {myphoto && (
          <Delete
            onClick={() => {
              DeletePhoto(photo._id)
            }}
          ></Delete>
        )}
      </Actions>
    </CardSC>
  )
}

export default Card
