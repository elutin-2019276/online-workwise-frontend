import React from 'react';
import { Col, Button, Card } from 'react-bootstrap'; // Asegúrate de importar Card aquí
import { StyledContainer, Banner, BannerImageStyled, BannerText, VIPBenefits, OffersRow, OfferCard, OfferImage } from '../../pages/client_CSS/HomeClientStyles'; // Importa los estilos
import HomeImage from '../../assets/HomeImage.jpg';
import Paquete1 from '../../assets/Paquete1.png';
import Paquete2 from '../../assets/Paquete2.jpeg';
import Paquete3 from '../../assets/Paquete3.jpeg';

export const HomeClient = () => {
  return (
    <StyledContainer fluid>
      <Banner>
        <BannerImageStyled src={HomeImage} alt="Banner" />
        <BannerText>
          <h1>Tus oretas de trabajo acá</h1>
          <p>Realiza todos tus proyectos y tus planes de trabajo</p>
          <Button variant="primary">Conoce más</Button>
        </BannerText>
      </Banner>
      <VIPBenefits>
        <h3>Beneficios de ser miembros de Bancubito</h3>
        <p>
          Como asociado, te prometemos varios beneficios como préstamos con tasas competitivas, asesoramiento financiero personalizado, acceso a productos de inversión exclusivos y una experiencia bancaria sin igual. Además, disfrutarás de servicios de banca digital avanzada que te permitirán gestionar tus finanzas de manera eficiente desde cualquier lugar. Con nuestro compromiso de excelencia y apoyo constante, en Bancubito, tu éxito financiero es nuestra prioridad.
        </p>
        <h4>Explora los planes que te ofrecemos:</h4>
        <OffersRow>
          <Col md={3}>
            <OfferCard className="mb-3">
              <OfferImage src={Paquete1} />
              <Card.Body>
                <Card.Title>Solicita tu crédito online y planea tu futuro ya</Card.Title>
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
                <Card.Title>Conoce los beneficios de tus Tarjetas de Crédito y Débito G&T Continental</Card.Title>
                <Card.Text>Ir a beneficios</Card.Text>
              </Card.Body>
            </OfferCard>
          </Col>
        </OffersRow>
      </VIPBenefits>
    </StyledContainer>
  );
};

