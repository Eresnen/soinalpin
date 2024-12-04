import Particle from "../Particle";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ThemedText from '../../components/ThemedText';
import { formatDescription } from '../../components/sections/Presentation';
import { useTheme as useMaterialUITheme } from '@mui/material/styles';  // Pour Material-UI

const Prestations = ({ data, style }: { data: { title: string; description: string; image: string;}[]; style?: StyleType; }) => {
  const materialTheme = useMaterialUITheme();

  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="data">
      <Particle />
      <ThemedText>
        <h1 style={{ ...styles.pageTitle }}>NOS PRESTATIONS</h1>
      </ThemedText>

      <Row className="g-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {data.map((prestation, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <div style={{ ...styles.prestationCard, backgroundColor: materialTheme.palette?.cards?.card1 }}>
              <div style={styles.cardImageWrapper}>
                <img src={prestation.image} alt={prestation.title} style={styles.cardImage} />
              </div>
              <ThemedText style={{ ...style?.text }}>
                <h2 style={{ ...styles.cardTitle, ...style?.cardTitle }}>
                  {formatDescription(prestation.title, style?.specialText)}
                </h2>
                <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                  {formatDescription(prestation.description, style?.specialText)}
                </p>
              </ThemedText>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

type StyleType = {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  specialText?: React.CSSProperties;
  card?: React.CSSProperties;
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '0px 20px',
    paddingTop: '100px',
    paddingBottom: '50px',
    maxWidth: '1200px',
     minHeight: '100vh'
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '40px',
  },
  prestationCard: {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center' as 'center' as 'center' as 'center',
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
    objectFit: 'contain' as 'contain', // Assure que l'image couvre la zone sans déformation
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default Prestations;


