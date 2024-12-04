import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from "../Particle";
import { useTheme as useMaterialUITheme } from '@mui/material/styles';  // Pour Material-UI
import ThemedText from "../../components/ThemedText";
import { formatDescription } from "../../components/sections/Presentation";

const Annuaires = ({ data, style }: { data: { name: string; description: string; startDate: string; image: string; }[]; style?: StyleType; }) => {
  const materialTheme = useMaterialUITheme();

  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="prestations">
      <Particle />
      <Container>
        <ThemedText>
          <h1 style={{ ...styles.pageTitle }}>NOS PARTENAIRES</h1>
        </ThemedText>

        <Row className="g-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {data.map((partenaire, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
              <div style={{ ...styles.partnerCard, backgroundColor: materialTheme.palette?.cards?.card1 }}>
                <div style={styles.cardImageWrapper}>
                  <img src={partenaire.image} alt={partenaire.name} style={styles.cardImage} />
                </div>
                <ThemedText style={{ ...style?.text }}>
                  <h2 style={{ ...styles.cardTitle, ...style?.cardTitle }}>
                    {formatDescription(partenaire.name, style?.specialText)}
                  </h2>
                  <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                    {formatDescription(partenaire.description, style?.specialText)}
                  </p>
                  <p style={{ ...styles.cardStartDate, ...style?.cardStartDate }}>
                    <strong>Date de début:</strong> {partenaire.startDate}
                  </p>
                </ThemedText>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Annuaires;

type StyleType = {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  specialText?: React.CSSProperties;
  cardStartDate?: React.CSSProperties;
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '0px 20px',
    paddingTop: '100px',
    paddingBottom: '50px',
    maxWidth: '1200px',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '40px',
  },
  partnerCard: {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center' as 'center',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
  },
  cardImageWrapper: {
    marginBottom: '20px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain' as 'contain',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  cardStartDate: {
    fontSize: '1rem',
    color: '#14c58a',
  },
};