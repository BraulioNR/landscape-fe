import styled from "styled-components"
import { Link } from "react-router-dom"
import img_loading from "../../assets/images/Img_Loading.svg"
import { keyframes } from "styled-components"

export const Container = styled.div`
  margin-top: 100px;
  display: grid;
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
`

export const Title = styled.h1`
  margin-bottom: 15px;
  width: 50%;
  margin-bottom: 35px;
`
const jumps = keyframes`
  0% {
    top: 0em;
  }
  40% {
    top: 0em;
  }
  43% {
    top: -0.9em;
  }
  46% {
    top: 0em;
  }
  48% {
    top: -0.4em;
  }
  50% {
    top: 0em;
  }
  100% {
    top: 0em;
  }
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
  transition: all 0.2s;
  animation: ${jumps} 5s infinite linear;
  position: relative;
  :hover {
    background-color: white;
    color: #000000;
  }
`
export const DivDepartments = styled.div``

export const DivTitleBox = styled.div`
  background-color: #76d7c4;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  h3 {
    font-family: "Gothic Bold", "CenturyGothic", "Century Gothic", "sans-serif";
    font-size: 60px;
    color: #fff;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 1200px) {
    h3 {
      font-family: "Gothic Bold", "CenturyGothic", "Century Gothic",
        "sans-serif";
      color: #fff;
      text-align: center;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 1.75rem;
    }
  }
`
