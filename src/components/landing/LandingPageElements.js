import styled from "styled-components"
import { styled as MuiStyled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import img_loading from "../../assets/images/Img_Loading.svg"

import ButtonBase from "@mui/material/ButtonBase"

export const Container = styled.div`
  margin-top: 100px;
  display: grid;
`

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 15px;
`

export const TextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: url(${img_loading});
  background-attachment: fixed;
  width: 100%;
  height: 80vh;
  margin-bottom: 25px;
`

export const Title = styled.h1`
  margin-bottom: 15px;
  width: 50%;
  margin-bottom: 35px;
`

export const Button = styled(Link)`
  border-radius: 5px;
  width: 180px;
  height: 52px;
  background-color: #22d1b1;
  color: #fff;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
export const DivDepartments = styled.div``
export const ImageButton = MuiStyled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  margin: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}))

export const ImageSrc = MuiStyled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center center",
})

export const Image = MuiStyled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}))

export const ImageBackdrop = MuiStyled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}))

export const ImageMarked = MuiStyled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}))
