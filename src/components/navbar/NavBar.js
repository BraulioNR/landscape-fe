import React, { useState } from "react"
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.css"
import {
  Logo,
  LinkLogo,
  Login,
  SignUP,
  NavBarSC,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  HeaderMenu,
} from "./NavBarElements"
import { NavItem, Collapse, NavbarToggler, Nav, NavLink } from "reactstrap"
import logo from "../../assets/images/Logo_2.svg"
import ModalLogin from "../modal/modallogin/ModalLogin"
import ModalSignUp from "../modal/modalsignup/ModalSignUp"
import { Link } from "react-router-dom"
const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  const [modalLog, setModalLog] = useState(false)
  const [modalSignUP, setModalSignUp] = useState(false)
  let perfile = localStorage.getItem("perfile")
  function toggle(e) {
    e.preventDefault()
    setModalLog(!modalLog)
  }
  function toggleSignUP(e) {
    e.preventDefault()
    setModalSignUp(!modalSignUP)
  }
  function changeBoth(e) {
    setModalSignUp(modalLog)
    setModalLog(!modalLog)
  }

  function funlogout(e) {
    e.preventDefault()
    localStorage.removeItem("token")
    localStorage.removeItem("perfile")
    window.location.reload(false)
  }
  return (
    <>
      <NavBarSC
        container={false}
        color="#11111f"
        dark
        expand="xl"
        fixed="top"
        light
      >
        <LinkLogo to="/">
          <Logo src={logo} />
        </LinkLogo>
        {props.isAuth && (
          <HeaderMenu className="header__menu">
            <HeaderMenuProfile>
              <HeaderMenuProfileImg src={perfile} />
            </HeaderMenuProfile>
            <ul>
              <li>
                <Link to="/">My Photos</Link>
              </li>
              <li>
                <Link to="/">Perfile</Link>
              </li>
              <li>
                <Link to="/" onClick={funlogout}>
                  Log out
                </Link>
              </li>
            </ul>
          </HeaderMenu>
        )}
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar isOpen={!collapsed}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Photos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/regions">Regions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
          </Nav>
          {!props.isAuth && (
            <>
              <Login onClick={toggle} to="/">
                Login
              </Login>
              <ModalLogin
                modal={modalLog}
                toggle={toggle}
                setModalLog={setModalLog}
                changeBoth={changeBoth}
              ></ModalLogin>
              <SignUP onClick={toggleSignUP} to="/">
                Sign Up
              </SignUP>
              <ModalSignUp
                modal={modalSignUP}
                toggle={toggleSignUP}
                setModalSignUp={setModalSignUp}
                changeBoth={changeBoth}
              ></ModalSignUp>
            </>
          )}
        </Collapse>
      </NavBarSC>
    </>
  )
}

export default NavBar
