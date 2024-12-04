import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { formatDescription } from './Presentation';
import ThemedText from '../ThemedText';

const Competance = ({ data, style }: { data: { title: string; subTitle: string; description?: string; cards: any[] }[]; style?: StyleType; }) => {
  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="about">
        {data.map((section, sectionIndex) => (
          <div style={{ ...styles.wrapper, ...style?.wrapper }} key={sectionIndex}>
            <Col md={12} className="home-about-social">
              <ThemedText style={{ ...style?.text }}>
                <h1>{formatDescription(section.title, style?.specialText)}</h1>
                <p>{formatDescription(section.subTitle, style?.specialText)}</p>
              </ThemedText>
            </Col>

            {section?.description && (
              <ThemedText style={{ color: style?.card?.color }}>
                <p style={{ ...styles.description, backgroundColor: style?.card?.backgroundColor , ...style?.description }}>
                  {formatDescription(section.description, style?.specialText)}
                </p>
              </ThemedText>
            )}

            <div style={{ ...styles.gridContainer, ...style?.gridContainer }}>
              {section.cards.map((card) => (
                <div key={card.id} style={{ ...styles.card, ...style?.card }}>
                  <card.icon style={{ ...styles.icon, ...style?.icon }} />
                  <ThemedText style={{ color: style?.card?.color }}>
                    <h4 style={{ ...styles.cardTitle, ...style?.cardTitle }}>
                      {formatDescription(card.title, style?.specialText)}
                    </h4>
                    <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                      {formatDescription(card.description, style?.specialText)}
                    </p>
                  </ThemedText>
                </div>
              ))}
            </div>
          </div>
        ))}
    </Container>
  );
};

type StyleType = {
  container?: React.CSSProperties;
  description?: React.CSSProperties;
  wrapper?: React.CSSProperties;
  gridContainer?: React.CSSProperties;
  card?: React.CSSProperties;
  icon?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  specialText?: React.CSSProperties;
  text?: React.CSSProperties;
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '0 20px',
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center'
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  description: {    
    backgroundColor: 'white',
    padding: '15px 50px',
    borderRadius: '15px',
    fontSize: '1.2rem',
    marginBottom: '50px',
    lineHeight: '1.8',
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    gap: '20px',    
    justifyContent: 'center',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    width: 'calc(33.33% - 20px)', // Carte prend un tiers de la largeur
    minWidth: '250px', // Largeur minimale
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    marginBottom: '20px', // Espacement pour que les cartes ne se chevauchent pas
  },
  icon: {
    fontSize: '3rem',
    color: '#14c58a',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },

  // Media queries pour la responsivité
  '@media (max-width: 768px)': {
    container: {
      padding: '0 10px', // Réduit l'espace sur les petits écrans
    },
    gridContainer: {
      justifyContent: 'center', // Centrer les cartes sur les petits écrans
    },
    card: {
      width: 'calc(50% - 10px)', // Sur les petits écrans, 2 cartes par ligne
      minWidth: 'auto', // Supprime la largeur minimale
    },
  },
  '@media (max-width: 480px)': {
    card: {
      width: '100%', // Sur les très petits écrans, chaque carte occupe 100% de la largeur
      minWidth: 'auto',
    },
  },
};

export default Competance;