import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";
// Importar imágenes
import HomeImage from "../../assets/HomeImage.jpg";
import Paquete1 from "../../assets/Paquete1.png";
import Paquete2 from "../../assets/Paquete2.jpeg";
import Paquete3 from "../../assets/Paquete3.jpeg";

const StyledContainer = styled(Container)`
  padding: 2rem;
  max-width: 100%;
  overflow-x: hidden;
`;

const WelcomeCard = styled(Card)`
  margin-bottom: 3rem;
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const WelcomeImage = styled(Card.Img)`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;

const VIPBenefits = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

const OffersRow = styled(Row)`
  margin-top: 2rem;
`;

const OfferCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  padding: 1rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const OfferImage = styled(Card.Img)`
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const OfferButton = styled(Button)`
  margin-top: 1rem;
`;

export const HomeClient = () => {
  return (
    <StyledContainer fluid>
      <WelcomeCard>
        <WelcomeImage variant="top" src={HomeImage} />
        <Card.Body>
          <Card.Title>Bienvenido a Worwise</Card.Title>
          <Card.Text>
            En Worwise estamos comprometidos con la excelencia financiera y el
            bienestar de nuestros clientes. Con más de 2 semanas de experiencia
            en el sector bancario, nos enorgullece ser un líder en innovación y
            servicio personalizado. Nuestro objetivo es proporcionar soluciones
            financieras adaptadas a sus necesidades individuales, garantizando
            que cada cliente reciba la atención y los recursos necesarios para
            alcanzar sus metas financieras.
          </Card.Text>
          <Button variant="primary">Descubre más</Button>
        </Card.Body>
      </WelcomeCard>
      <VIPBenefits>
        <h3>Beneficios de ser miembros de Worwise</h3>
        <p>
          Como asociado, te prometemos varios beneficios como préstamos con
          tasas competitivas, asesoramiento financiero personalizado, acceso a
          productos de inversión exclusivos y una experiencia bancaria sin
          igual. Además, disfrutarás de servicios de banca digital avanzada que
          te permitirán gestionar tus finanzas de manera eficiente desde
          cualquier lugar. Con nuestro compromiso de excelencia y apoyo
          constante, en Worwise, tu éxito financiero es nuestra prioridad.
        </p>
        <h4>Explora los planes que te ofrecemos:</h4>
        <OffersRow>
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
          <Col md={3}>
            <OfferCard className="mb-3">
              <OfferImage src={Paquete1} />
              <Card.Body>
                <Card.Title>
                  Conoce los beneficios de tus Tarjetas de Crédito y Débito G&T
                  Continental
                </Card.Title>
                <Card.Text>Ir a beneficios</Card.Text>
              </Card.Body>
            </OfferCard>
          </Col>
        </OffersRow>
      </VIPBenefits>
    </StyledContainer>
  );
};
