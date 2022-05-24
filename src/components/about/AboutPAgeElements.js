import { style } from "@mui/system"
import styled from "styled-components"
export const Container = styled.div`
  margin-top: 100px;
  @media (max-width: 655px) {
    width: 100vw;
  }
  font-family: Poppins;
`
export const Footer = styled.div`
  background: #3b357b;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0px 0px 0px;
  padding: 25px;
  font-size: 15px;
  height: 25vh;
  min-height: 100px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }
`

export const Link = styled.a`
  text-decoration: none;
`
export const Social = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50vw;
  align-items: center;
  h2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`
export const DivMedia = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`
export const Pattners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  @media (max-width: 655px) {
    display: grid;
    width: 40vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
export const Logopatt = styled.div`
  background-color: #3b357b;
  img {
    width: 70%;
  }
  @media (max-width: 1000px) {
    img {
      width: 150px;
    }
  }
  @media (max-width: 655px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 80px;
    img {
      width: 80px;
    }
  }
`
export const Auspice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  h3 {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

export const IconSocial = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: #22d1b1;
    text-decoration: none;
  }
`
export const DivIcon = styled.div`
  border-radius: 20px;
  background-color: #252a57;
  width: 28px;
  height: 28px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60vh;
  @media (max-height: 660px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 60vh;
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 20vw;
    margin-right: 20vw;
  }
`
export const Greetings = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  button {
    height: 50px;
    width: 160px;
    background-color: #292929;

    a {
      text-decoration: none;
      color: white;
    }
    :hover {
      background-color: #000;
    }
  }
  .details {
    text-align: justify;
    padding-left: 100px;
    padding-right: 80px;
    font-family: Arial, Helvetica, sans-serif;
    color: grey;
    margin-bottom: 30px;
  }
  .grettins {
    text-align: left;
    padding-left: 100px;
  }
  .title {
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
  }
  .name {
    margin: 25px 0;
  }
  @media (max-height: 660px) {
    height: 23vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
export const Media = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  @media (max-height: 660px) {
    height: 23vh;
    img {
      width: 150px;
      height: 150px;
    }
  }
`

export const Img = styled.img`
  width: 400px;
  height: 400px;
`
export const ListSocial = styled.ul`
  display: inline-flex;
  list-style: none;
`
export const ItemSocial = styled.li`
  position: relative;
  background: #292929;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 28px;
  height: 28px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  :hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  :hover span,
  :hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  &.linkedin:hover,
  &.linkedin:hover .tooltip,
  &.linkedin:hover .tooltip::before {
    background: #1877f2;
    color: #ffffff;
  }

  &.envelope:hover,
  &.envelope:hover .tooltip,
  &.envelope:hover .tooltip::before {
    background: #e4405f;
    color: #ffffff;
  }

  &.github:hover,
  &.github:hover .tooltip,
  &.github:hover .tooltip::before {
    background: #333333;
    color: #ffffff;
  }
`
export const Tip = styled.span`
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  :before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`
export const Icon = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }
`
