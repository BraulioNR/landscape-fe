import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.footer`
  background: #11111f;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 25px;
  font-size: 15px;
  width: 100%;
`

export const Links = styled(Link)`
  margin: 0px 25px;
  text-decoration: none;
  color: #fff;
  padding: 5px;
  &:hover {
    text-decoration: underline;
    color: #00adee;
  }
`
