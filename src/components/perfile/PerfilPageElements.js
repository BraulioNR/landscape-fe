import styled from "styled-components"
export const Container = styled.div`
  margin-top: 100px;
  height: 74vh;
  @media (max-width: 1200px) {
    height: 90vh;
    width: 100vw;
  }
`
export const Title = styled.h1`
  text-align: center;
`
export const DivPerfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10vw;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 25vh;
    margin-left: 0;
  }
`

export const DivData = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 655px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 98.5vw;
    height: 50vh;
  }
`

export const DivForm = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 96vw;
    height: 70vh;
  }
`

export const PerfileImg = styled.img`
  width: 150px;
  @media (max-width: 1200px) {
    width: 100px;
  }
`
export const NameUser = styled.span`
  font-weight: bold;
`
export const EmailUser = styled.span`
  color: gray;
`
export const Label = styled.label``
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 30%;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 96vw;
    padding: 0.5vh;
  }
  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 98vw;
    height: 12vh;
    padding: 0.5vh;
  }
`
export const RowName = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 30%;
  flex-wrap: wrap;
  input {
    width: 17vw;
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 96vw;
    height: 15vh;
    padding: 0.5vh;
    input {
      width: 43.5vw;
    }
  }
  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    height: 12vh;
    padding: 0.5vh;
  }
`
export const Column = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 49.5vw;
  }
`
export const Input = styled.input`
  width: 100%;
  @media (max-width: 1200px) {
    margin: 0 1vw;
    height: 40px;
  }
`
export const Submit = styled.button`
  border-radius: 10px;
  width: 90px;
  height: 42px;
  background-color: #22d1b1;
  color: #fff;
  border: 2px solid #22d1b1;
  margin-right: 30px;
  padding: 0 18px;

  @media (min-width: 1200px) {
    position: absolute;
    top: 60vh;
  }
`
