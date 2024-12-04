import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useTheme as useMaterialUITheme } from '@mui/material/styles';  // Pour Material-UI
import ThemedText from "../../components/ThemedText";
import { formatDescription } from "../../components/sections/Presentation";

const Team = ({ data, style }: { data: { firstName: string; lastName: string; specialty: string; description: string; message: string; image: string; }[]; style?: StyleType; }) => {
  const materialTheme = useMaterialUITheme();

  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="prestations">
      <Particle />
      <Container>
        <ThemedText>
          <h1 style={{ ...styles.pageTitle }}>RENCONTREZ NOTRE ÉQUIPE</h1>
        </ThemedText>

        <Row className="g-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {data.map((member, index) => (
            <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
              <div style={{ ...styles.memberCard, backgroundColor: materialTheme.palette?.cards?.card1 }}>
                <div style={styles.cardImageWrapper}>
                  <img src={member.image} alt={`${member.firstName} ${member.lastName}`} style={{...styles.cardImage, backgroundColor: materialTheme.palette?.primary?.main}} />
                </div>
                <ThemedText style={{ ...style?.text }}>
                  <h2 style={{ ...styles.cardTitle, ...style?.cardTitle }}>
                    {formatDescription(`${member.firstName} ${member.lastName}`, style?.specialText)}
                  </h2>
                  <h4 style={{ ...styles.cardSpecialty, ...style?.cardSpecialty }}>
                    {formatDescription(member.specialty, style?.specialText)}
                  </h4>
                  <p style={{ ...styles.cardDescription, ...style?.cardDescription }}>
                    {formatDescription(member.description, style?.specialText)}
                  </p>
                  <p style={{ ...styles.memberMessage, ...style?.memberMessage }}>
                    <strong>Message de {member.firstName}:</strong><br />
                    {formatDescription(member.message, style?.specialText)}
                  </p>
                </ThemedText>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Team;

type StyleType = {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardSpecialty?: React.CSSProperties;
  cardDescription?: React.CSSProperties;
  specialText?: React.CSSProperties;
  memberMessage?: React.CSSProperties;
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '0px 20px',
    paddingTop: '100px',
    paddingBottom: '50px',
    maxWidth: '1200px',
    height: '100%',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '40px',
  },
  memberCard: {
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
    width: '180px',  // Ajustez la taille selon vos besoins
    height: '180px', // Ajustez la taille selon vos besoins
    objectFit: 'contain' as 'contain', // Pour que l'image remplisse bien le cadre sans déformation
    borderRadius: '50%', // Donne l'apparence d'un cercle
    margin: '0 auto',  // Pour centrer l'image dans son conteneur
    display: 'block',  // S'assure que l'image est affichée correctement
  },  
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  cardSpecialty: {
    fontSize: '1.2rem',
    fontWeight: '500',
    marginBottom: '10px',
    color: '#14c58a', // Couleur verte personnalisée pour la spécialité
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  memberMessage: {
    fontSize: '1rem',
    color: '#333',
    fontStyle: 'italic',
    marginTop: '20px',
  },
};
