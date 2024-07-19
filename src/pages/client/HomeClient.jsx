import React from "react";
import {
  Col,
  Button,
  Card,
  Container,
  Row,
  Navbar,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";
import image from "../../assets/image.jpg";
import Paquete1 from "../../assets/Paquete1.png";
import Paquete2 from "../../assets/Paquete2.jpg";
import Paquete3 from "../../assets/Paquete3.jpeg";

// Colores principales
const primaryColor = "#004085";
const secondaryColor = "#007bff";
const accentColor = "#ffc107";
const backgroundColor = "#f8f9fa";
const textColor = "#343a40";

// Estilos para los componentes
const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const StyledNavbar = styled(Navbar)`
  background-color: ${primaryColor};
  padding: 20px 40px; // Incrementado para mayor tamaño y mejor aspecto
  font-size: 1.25rem; // Aumentado el tamaño de fuente

  .navbar-brand {
    font-size: 1.75rem; // Tamaño de fuente mayor para la marca
    font-weight: bold;
    color: ${backgroundColor} !important;
    &:hover {
      color: ${accentColor} !important;
    }
  }

  .nav-link {
    color: ${backgroundColor} !important;
    margin-left: 20px; // Espaciado adicional entre enlaces
    &:hover {
      color: ${accentColor} !important;
    }
  }

  .navbar-toggler {
    border: none;
    &:focus {
      outline: none;
      box-shadow: none;
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
  }
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 400px; // Incrementado para mayor impacto visual
  overflow: hidden;
`;

const BannerImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  button {
    background-color: ${accentColor};
    border: none;
    font-size: 1.25rem;
    padding: 10px 20px;

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;

const VIPBenefits = styled.div`
  padding: 60px 20px; // Incrementado para mayor espacio
  text-align: center;
  background-color: ${primaryColor};
  color: white;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const OffersRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const OfferCard = styled(Card)`
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }

  .card-body {
    background-color: ${secondaryColor};
    color: white;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-text {
    font-size: 1rem;
  }

  button {
    background-color: ${accentColor};
    border: none;

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;

const OfferImage = styled.img`
  width: 100%;
  height: 200px; // Incrementado para mayor impacto visual
  object-fit: cover;
`;

const ClientSupport = styled.div`
  text-align: center;
  padding: 40px;
  background-color: ${secondaryColor};
  color: white;

  h4 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  a {
    color: ${accentColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: ${accentColor};
    border: none;
    margin-top: 20px;

    &:hover {
      background-color: ${primaryColor};
    }
  }
`;

export const HomeClient = () => {
  return (
    <StyledContainer fluid>
      <StyledNavbar expand="lg">
        <Navbar.Brand href="#home">WorkWise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/worwise/WorkOfferA">WorkOfferA</Nav.Link>
            <Nav.Link href="/worwise/MyWorkOffer">MyWorkOffer</Nav.Link>
            <Nav.Link href="/worwise/employer">EmployerClient</Nav.Link>
            <Nav.Link href="/worwise/profession">ProfessionClient</Nav.Link>
            <Nav.Link href="/worwise/JobSeeker">JobSeeker</Nav.Link>
            <Nav.Link href="/worwise/ListJobSeekers">ListJobSeekers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
      <Banner>
        <BannerImageStyled src={image} alt="Banner" />
        <BannerText>
          <h1>¡Tus ofertas de trabajo acá!</h1>
          <p>Realiza todos tus proyectos y tus planes de trabajo</p>
          <Button variant="primary">Conoce más</Button>
        </BannerText>
      </Banner>
      <VIPBenefits id="benefits">
        <h3>¿Quiénes somos?</h3>
        <p>
          En Workwise, nos dedicamos apasionadamente a conectar a personas
          talentosas con oportunidades laborales que transformen sus carreras.
          Como líderes en el ámbito de la búsqueda de empleo, nuestra misión es
          facilitar el camino hacia el éxito profesional, proporcionando
          recursos, orientación experta y acceso a una red extensa de empresas
          buscando talento. En Workwise, creemos en el poder de cada individuo
          para alcanzar su máximo potencial, y trabajamos incansablemente para
          hacer realidad ese potencial, un trabajo a la vez.
        </p>
        <h4>Explora los planes que te ofrecemos:</h4>
        <OffersRow id="plans">
          <Col md={3}>
            <OfferCard className="mb-3">
              <OfferImage src={Paquete1} />
              <Card.Body>
                <Card.Title>
                  Solicita tu crédito online y planea tu futuro ya
                </Card.Title>
                <Card.Text>Ir a créditos</Card.Text>
              </Card.Body>
            </OfferCard>
          </Col>
          <Col md={3}>
            <OfferCard className="mb-3">
              <OfferImage src={Paquete2} />
              <Card.Body>
                <Card.Title>¡Sorteos y Promociones!</Card.Title>
                <Card.Text>Ir a promociones</Card.Text>
              </Card.Body>
            </OfferCard>
          </Col>
          <Col md={3}>
            <OfferCard className="mb-3">
              <OfferImage src={Paquete3} />
              <Card.Body>
                <Card.Title>Únete a GTCXperience</Card.Title>
                <Card.Text>Ir a gtcxperience</Card.Text>
              </Card.Body>
            </OfferCard>
          </Col>
        </OffersRow>
      </VIPBenefits>
      <ClientSupport id="support">
        <h4>Soporte al Cliente</h4>
        <p>
          Email: <a href="mailto:support@inmyteam.com">support@inmyteam.com</a>
        </p>
        <p>Teléfono: 954-323-0371</p>
        <p>Teléfono: 954-612-3234</p>
        <Button variant="primary">Ir a créditos</Button>
      </ClientSupport>
    </StyledContainer>
  );
};
