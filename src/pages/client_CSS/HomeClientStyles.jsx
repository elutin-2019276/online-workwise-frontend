import styled from "styled-components";
import { Container, Row, Card } from "react-bootstrap";

export const StyledContainer = styled(Container)`
  padding: 2rem;
  max-width: 100%;
  overflow-x: hidden;
`;

export const Banner = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`;

export const BannerImageStyled = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const VIPBenefits = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const OffersRow = styled(Row)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OfferCard = styled(Card)`
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
  margin: 1rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const OfferImage = styled(Card.Img)`
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
