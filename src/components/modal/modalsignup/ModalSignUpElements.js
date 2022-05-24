import styled from "styled-components"
import { Link } from "react-router-dom"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

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
  color: #000;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  margin: 2px 56px 2px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
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

export const ButtonSubmit = styled.button`
  width: 80%;
  height: 42px;
  background: #22d1b1;
  color: #ffffff;
  border: none;
  margin-top: 5%;
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

export const Select = styled(Autocomplete)``
export const Option = styled(TextField)`
  width: 80%;
  height: 24px;
  color: #000;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
  border-bottom-color: #000000 !important;
  margin: 2px 56px 2px;
  outline: none;
  && ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
  }
  && :focus {
    border-right: none;
    border-top: none;
    border-left: none;
    border-bottom: 1px solid #009fc7;
  }
  &&::placeholder {
    color: #009fc7;
  }
`
