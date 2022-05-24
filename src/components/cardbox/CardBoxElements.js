import styled from "styled-components"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import CreateSvg from "../../assets/images/create.svg"

export const BoxCard = styled(Box)`
  align-items: center;
  width: 98vw;
  padding-left: 3vw;
`
export const Container = styled.div``
export const DivButton = styled.div`
  height: 5vh;
  margin-bottom: 4vh;
  margin-top: 4vh;
  height: 55px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  align-items: flex-end;
`
export const Add = styled.button`
  position: relative;
  width: 130px;
  height: 55px;
  overflow: hidden;
  z-index: 1;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 0;
  border-radius: 28px;
  background-color: #fff;
  :after {
    position: absolute;
    content: "Create ";
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;

    transition: all 0.3s ease;
  }

  :hover {
    color: rgb(0, 0, 0);
  }

  :hover:after {
    top: auto;
    bottom: 0;
    width: 100%;
    background-color: #76d7c4;
  }
`
export const Create = styled.button`
  background-color: lightblue;
  width: 150px;
  height: 40px;
`
