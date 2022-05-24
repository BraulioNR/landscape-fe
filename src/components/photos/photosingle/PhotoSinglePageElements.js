import styled from "styled-components"
export const Container = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 120vh;
  background-color: white;
  color: #1e213d;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 2vh;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 220vh;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 150vh;
  }
`
export const DivMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
  }
`
export const DivImg = styled.div`
  width: 40vw;
  height: 80vh;
  border-radius: 7px;
  @media (max-width: 1000px) {
    width: 600px;
    height: 680px;
  }
  @media (max-width: 700px) {
    width: 450px;
    height: 550px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 400px;
  }
  @media (max-width: 390px) {
    width: 250px;
    height: 350px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`
export const ElementDiv = styled.div`
  display: grid;
  grid-template-rows: 40px 40px;
  align-items: center;

  && .sc-bkrxz {
    display: flex;
    justify-content: flex-start;
  }
  margin-bottom: 10px;
  && .device {
    width: 250px;
  }
`
export const ElementSwitch = styled.div`
  @media (max-width: 1000px) {
    width: 30vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  span.bufjHW {
    color: #1e213d !important;
  }
  @media (max-width: 610px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
  }
`
export const Title = styled.h3``
export const DivData = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 80vh;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 120vh;
  }
`
export const DivExposure = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 40vh;
  }
  @media (max-width: 610px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 25vw;
    margin-right: 25vw;
  }
`
export const DivLocation = styled.div`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 20vh;
  }
  @media (max-width: 700) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
  @media (min-width: 610) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`

export const Selected = styled.select`
  border-color: #1e213d;
  background-color: #e5e7e9;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  color: #1e213d;
  margin: 5px 0;
`
export const Info = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
  @media (max-width: 610px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50vw;
    align-items: center;
    text-align: center;
    justify-items: center;
  }
`
export const Label = styled.label`
  color: #22d1b1;
`
export const Divmap = styled.div`
  width: 400px;
  height: 250px;

  @media (max-width: 1000px) {
    width: 350px;
    height: 250px;
  }
`
