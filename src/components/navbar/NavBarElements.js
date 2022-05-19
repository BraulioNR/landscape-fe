import { Link } from "react-router-dom"
import styled from "styled-components"
import { Navbar } from "reactstrap"

export const NavBarSC = styled(Navbar)`
  background-color: #11111f;
  padding-right: 15px;
  color: #fff;
  && a.nav-link:hover {
    color: #22d1b1;
  }

  @media (max-width: 1200px) {
    a.nav-link {
      margin-left: 15px;
    }
  }
`

export const Logo = styled.img`
  margin-left: 30px;
  width: 50%;
`
export const LinkLogo = styled(Link)`
  width: 185.6px;
`
export const SignUP = styled(Link)`
  border-radius: 25px;
  width: 90px;
  height: 42px;
  background-color: #22d1b1;
  color: #fff;
  border: 2px solid #22d1b1;
  margin-right: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 1200px) {
    color: rgba(255, 255, 255, 0.55);
    border-radius: 0px;
    width: 90px;
    height: 42px;
    background-color: #11111f;
    border: 2px solid red;
    text-align: left;
    border: 0;
    margin-left: 15px;
    :hover {
      text-decoration: none;
      color: #fff;
    }
  }
`
export const Login = styled(Link)`
  border-radius: 5px;
  width: 90px;
  height: 42px;

  color: #22d1b1;
  border: 2px solid #22d1b1;
  margin-right: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 1200px) {
    color: rgba(255, 255, 255, 0.55);
    text-align: left;
    background-color: #11111f;
    border: 0;
    border-radius: 0;
    margin-left: 15px;
    :hover {
      text-decoration: none;
      color: #fff;
    }
  }
`
export const HeaderMenuProfile = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`

export const HeaderMenuProfileImg = styled.img`
  margin-right: 30px;
  width: 50px;
`
export const HeaderMenu = styled.div`
  @media (min-width: 1200px) {
    margin-right: 30px;
    position: absolute;
    right: 1px;
  }
  ul {
    display: none;
    list-style: none;
    margin: 0px 0px 0px -14px;
    padding: 0px;
    position: absolute;
    width: 100px;
    text-align: center;
    font-size: 15px;
    background: #1e1e1e;
  }
  :hover ul,
  ul:hover {
    display: block;
  }
  li {
    margin: 10px 0px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  li a:hover {
    text-decoration: underline;
    color: #00adee;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #22d1b1;
  }
`
