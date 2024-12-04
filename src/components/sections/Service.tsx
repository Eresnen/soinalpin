import { Container, Row, Col } from 'react-bootstrap';
import { formatDescription } from './Presentation';
import ThemedText from '../ThemedText';

const Services = ({ data, style }: { data?: any; style?: StyleType; }) => {
  return (
    <>
      {data?.map((service: any, index: number) => (
        <Container fluid key={index} style={{ ...styles.container, ...style?.container }}>
          <Row>
            <Col md={12} className="home-about-social">
              <ThemedText style={{ ...style?.text }}>
                <h1 style={{ ...styles.title, ...style?.title }}>{formatDescription(service.title, style?.specialText)}</h1>
                <p style={{ ...styles.subtitle, ...style?.subtitle }}>
                  {formatDescription(service.subTitle, style?.specialText)}
                </p>
              </ThemedText>
            </Col>
          </Row>

          <div style={{ ...styles.cardsContainer, ...style?.cardsContainer }}>
            {service.cards.map((card: any, cardIndex: number) => (
              <div key={cardIndex} style={{ ...styles.card, ...style?.card }}>
                <img src={card.image} alt={card.title} style={{ ...styles.cardImage, ...style?.cardImage }} />
                <div style={styles.cardContent}>
                  <ThemedText style={{ ...style?.text }}>
                    <h3 style={{ ...styles.cardTitle, ...style?.cardTitle }}>{card.title}</h3>
                    <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                      {formatDescription(card.description, style?.specialText)}
                    </p>
                  </ThemedText>
                </div>
                <div>
                <a href={card.link} style={{ ...styles.cardLink, ...style?.cardLink }}>
                      Découvrez toutes les prestations
                    </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      ))}
    </>
  );
};

type StyleType = {
  container?: React.CSSProperties;
  title?: React.CSSProperties;
  subtitle?: React.CSSProperties;
  cardsContainer?: React.CSSProperties;
  card?: React.CSSProperties;
  cardImage?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  cardLink?: React.CSSProperties;
  specialText?: React.CSSProperties;
  text?: React.CSSProperties;
};

const styles = {
  container: {
    paddingBottom: 20,
  },
  title: {},
  subtitle: {
    fontSize: '1.2rem',
  },

  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    flex: '1 1 calc(33% - 20px)', // Pour une disposition responsive à 3 cartes
    boxSizing: 'border-box' as 'border-box',
    textAlign: 'center' as 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    height: 'auto', // Hauteur dynamique
    minWidth: '280px', // Largeur minimale pour chaque carte
    maxWidth: '300px', // Largeur maximale pour chaque carte
    flexGrow: 1, // Permet à chaque carte de prendre l'espace restant
    overflow: 'hidden', // Masque les débordements
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    flexGrow: 1, // Assure que l'espace restant est utilisé par le texte
    minHeight: '150px', // Hauteur minimale de la carte, ajustable
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    maxHeight: '200px', // Hauteur maximale pour l'image
    objectFit: 'contain' as 'contain', // L'image garde son ratio tout en couvrant l'espace
  },
  cardTitle: {
    marginTop: '15px',
    fontSize: '1.5rem',
    color: '#333',
    height: 'auto', // Hauteur flexible
    wordBreak: 'break-word' as 'break-word', // Gère le débordement de texte
    textOverflow: 'ellipsis', // Ajoute des points de suspension si le texte est trop long
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '15px',
    flexGrow: 1, // La description prend tout l'espace restant
    wordBreak: 'break-word' as 'break-word', // Gère le retour à la ligne dans les textes longs
    overflow: 'hidden', // Masque le texte si trop long
    textOverflow: 'ellipsis', // Ajoute des points de suspension
    display: '-webkit-box', // Utilise une boîte webkit pour la mise en forme de ligne
    WebkitLineClamp: 3, // Limite la description à 3 lignes
    WebkitBoxOrient: 'vertical' as 'vertical', // Nécessaire pour couper le texte
  },
  cardLink: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#14c58a',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: 'auto', // Le bouton reste en bas de la carte
  },

  // Media Queries pour rendre le composant responsive
  '@media (max-width: 768px)': {
    card: {
      flex: '1 1 calc(50% - 20px)', // Sur les petits écrans, 2 cartes par ligne
      minWidth: 'auto', // Supprime la largeur minimale
      maxWidth: 'calc(50% - 20px)', // Réduit la largeur maximale
    },
    cardsContainer: {
      justifyContent: 'center' as 'center',
    },
  },
  '@media (max-width: 480px)': {
    card: {
      flex: '1 1 100%', // Sur les très petits écrans, une carte par ligne
      maxWidth: '100%', // Carte prend toute la largeur
    },
  },
};

export default Services;
