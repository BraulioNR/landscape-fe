import React from "react"
import {
  Auspice,
  Container,
  Content,
  Footer,
  Greetings,
  Img,
  ItemSocial,
  Link,
  ListSocial,
  Logopatt,
  Media,
  Pattners,
  Social,
  Tip,
  Icon,
} from "./AboutPAgeElements"
import MIR from "../../assets/images/MIR.png"
import Proinnovate from "../../assets/images/proinnovate.png"
import Avatar from "../../assets/images/avatars.png"
const AboutPage = () => {
  return (
    <Container>
      <Content>
        <Greetings>
          <div>
            <p className="grettins title">Hello</p>
            <h1 className="grettins name">
              I'm <font color="#17d1ac">Braulio B.</font> Nole Ruiz
            </h1>
            <p className="details">
              Developed landscape, a web application for photography lovers
              looking for inspiration, to share the passion of photography and
              explore new places.
            </p>
            <button>
              <a
                href="https://drive.google.com/uc?id=1KAnGx6XLAtmymUDmy7XjRr66047YJzvt&export=download"
                className="cv-btn"
              >
                Download Cv <i className="fa-solid fa-file-arrow-down"></i>
              </a>
            </button>
          </div>
        </Greetings>
        <Media>
          <Img src={Avatar}></Img>
        </Media>
      </Content>
      <Footer>
        <Social className="social">
          <h2>FOLLOW ME:</h2>
          <ListSocial className="wrapper">
            <ItemSocial className="icon envelope">
              <Tip className="tooltip">Gmail</Tip>
              <span>
                <Icon href="mailto:branoleruiz@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </Icon>
              </span>
            </ItemSocial>
            <ItemSocial className="icon github">
              <Tip className="tooltip">Github</Tip>
              <span>
                <Icon href="https://github.com/BraulioNR">
                  <i className="fab fa-github"></i>
                </Icon>
              </span>
            </ItemSocial>
            <ItemSocial className="icon linkedin">
              <Tip className="tooltip">Linkedin</Tip>
              <span>
                <Icon href="https://www.linkedin.com/in/brauliob-nr/">
                  <i className="fa-brands fa-linkedin"></i>
                </Icon>
              </span>
            </ItemSocial>
          </ListSocial>
        </Social>

        <Pattners>
          <Auspice>
            <h3>Thanks:</h3>
          </Auspice>
          <Logopatt>
            <Link href="https://makeitreal.camp/">
              <img alt="Make_it_Real.png" src={MIR} />
            </Link>
            <Link href="https://www.proinnovate.gob.pe/">
              <img alt="Proinnovate.png" src={Proinnovate} />
            </Link>
          </Logopatt>
        </Pattners>
      </Footer>
    </Container>
  )
}

export default AboutPage
