import { Container, Col } from 'react-bootstrap';
import { formatDescription } from './Presentation';
import ThemedText from '../ThemedText';

const Steps = ({ data, style }: { data: { title: string; subTitle: string; cards: any[] }[]; style?: StyleType; }) => {
  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="about">
      {data.map((step, index) => (
        <div key={index} style={{ ...styles.wrapper, ...style?.wrapper }}>
          <Col md={12} className="home-about-social">
            <ThemedText style={{ ...style?.text }}>
              <h1 style={{ ...styles.title, ...style?.title }}>{formatDescription(step.title, style?.specialText)}</h1>
              <p style={{ ...styles.subTitle, ...style?.subTitle }}>
                {formatDescription(step.subTitle, style?.specialText)}
              </p>
            </ThemedText>
          </Col>

          {step.cards.map((card) => (
            <div key={card.id} style={{ ...styles.stepCard, ...style?.stepCard }}>
              <card.icon style={{ ...styles.icon, ...style?.icon }} />
              <ThemedText style={{ ...style?.text }}>
                <h3 style={{ ...styles.cardTitle, ...style?.cardTitle }}>{formatDescription(card.title, style?.specialText)}</h3>
                <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                  {formatDescription(card.description, style?.specialText)}
                </p>
              </ThemedText>
            </div>
          ))}

          <div style={{ textAlign: 'end' }}>
            <button style={{ ...styles.button, ...style?.button }}>
              {formatDescription('APPELER', style?.specialText)}
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

type StyleType = {
  container?: React.CSSProperties;
  wrapper?: React.CSSProperties;
  title?: React.CSSProperties;
  subTitle?: React.CSSProperties;
  stepCard?: React.CSSProperties;
  icon?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  button?: React.CSSProperties;
  specialText?: React.CSSProperties;
  text?: React.CSSProperties;
};

const styles = {
  container: {
    paddingTop: 0,
    paddingBottom: 20,
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  stepCard: {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    marginBottom: '30px',
    textAlign: 'center' as const,
  },
  icon: {
    fontSize: '3rem',
    color: '#14c58a',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  subTitle: {
    fontSize: '1.2rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#777',
  },
  button: {
    padding: '12px 30px',
    fontSize: '1rem',
    backgroundColor: '#14c58a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Steps;