import styled from "styled-components"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import CardActions from "@mui/material/CardActions"
import EditSvg from "../../../assets/images/edit.svg"
import DeleteSvg from "../../../assets/images/delete.svg"
export const Container = styled.div`
  margin-top: 100px;
`
export const CardPhoto = styled(Card)`
  margin: 5px;
  :hover {
    box-shadow: 5px 5px #7decb4;
  }
`
export const CardImg = styled(CardMedia)`
  max-height: 230.35px;
  img {
  }
`
export const CardCont = styled(CardContent)``
export const Typo = styled(Typography)``
export const LinkCard = styled(Link)`
  text-decoration: none;
`
export const CardSC = styled.div``

export const Actions = styled(CardActions)`
  display: flex;
  justify-content: space-around;
`
export const Edit = styled.button`
  justify-content: center;
  background-image: url(${EditSvg});
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-style: none;
`
export const Delete = styled.button`
  justify-content: center;
  background-image: url(${DeleteSvg});
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-style: none;
`
