import styled from "styled-components"
import { Link } from "react-router-dom"
import { keyframes } from "styled-components"

export const LinkForm = styled(Link)`
  text-decoration: none;
  margin: auto;
`

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin: 28px 123px 3.5px 58px;
  text-align: left;
`

export const Input = styled.input`
  width: 80%;
  height: 24px;
  color: #9badbf;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  margin: 2px 56px 2px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #9badbf;
  }
  :focus {
    border-right: none;
    border-top: none;
    border-left: none;
    border-bottom: 1px solid #009fc7;
  }
  ::placeholder {
    color: #009fc7;
  }
`
const rotate = keyframes`
  from  {
      transform: rotate(0deg);
    }
    to  {
      transform: rotate(360deg);
    }
`

export const ButtonSubmit = styled.button`
  width: 80%;
  height: 42px;
  background: #22d1b1;
  color: #ffffff;
  border: none;
  margin-top: 5%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -12px;
    width: 24px;
    height: 24px;
    border: 2px solid;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s;
    animation: 0.8s linear infinite ${rotate};
  }
  &.sending {
    pointer-events: none;
    cursor: not-allowed;

    &:before {
      transition-delay: 0.5s;
      transition-duration: 1s;
      opacity: 1;
    }
  }
`

export const Forget = styled.p`
  color: #009fc7;
  margin: 10px 56px;

  :after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }
  :hover {
    color: #0d0d0d;
  }
  :hover:after {
    width: 100%;
  }
`
