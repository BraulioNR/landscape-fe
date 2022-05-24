import styled from "styled-components"
export const Container = styled.div`
  margin-top: 100px;
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
  @media (max-width: 655px) {
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
export const DivEmpty = styled.div`
  color: #11111f;
  text-align: center;
  margin-bottom: 10px;
  h1 {
    margin: 0;
    color: #11111f;
  }
`
