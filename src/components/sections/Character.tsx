import { Container, Col } from "react-bootstrap";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useState } from "react";
import { formatDescription } from "./Presentation";
import ThemedText from "../ThemedText";

const Character = ({ data, style }: { data?: any; style?: StyleType; }) => {
  const maxStars = 5;
  const [showMore, setShowMore] = useState(false);

  return (
    <Container style={{ ...styles.container, ...style?.container }} fluid id="about">
      {data?.map((section: any) => (
        <div key={section.title} style={{ ...styles.subContainer, ...style?.subContainer }}>
          <Col md={12} className="home-about-social" style={{ ...styles.containerTitle, ...style?.containerTitle }}>
            <ThemedText style={{ ...style?.text }}>
              <h1>{formatDescription(section.title, style?.specialText)}</h1>
              <p>{formatDescription(section.subtitle, style?.specialText)}</p>
            </ThemedText>
          </Col>

          <div style={{ ...styles.containerCards, ...style?.containerCards }}>
            {section.cards.slice(0, showMore ? section.cards.length : 3).map((member: any) => (
              <div key={member.id} style={{ ...styles.card, ...style?.card }}>
                <div style={{ ...styles.cardImage, backgroundImage: `url(${member.image})`, ...style?.cardImage }}>
                  <div style={{ ...styles.cardContent, ...style?.cardContent }}>
                    <h3 style={{ ...styles.cardTitle, ...style?.cardTitle }}>{member.name}</h3>
                    <p style={{ ...styles.cardSubtitle, ...style?.cardSubtitle }}>{member.specialty}</p>
                    
                    <div style={{ ...styles.rating, ...style?.rating }}>
                      {Array.from({ length: maxStars }, (_, i) => i < member.rating ? (
                        <IoStar key={i} style={{ ...styles.starIcon, ...style?.starIcon }} />
                      ) : (
                        <IoStarOutline key={i} style={{ ...styles.starIcon, ...style?.starIcon }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...styles.buttonContainer, ...style?.buttonContainer }}>
            <button onClick={() => setShowMore(!showMore)} style={{ ...styles.button, ...style?.button }}>
              {showMore ? "Voir moins..." : "Voir plus..."}
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Character;

type StyleType = {
  container?: React.CSSProperties;
  subContainer?: React.CSSProperties;
  containerTitle?: React.CSSProperties;
  containerCards?: React.CSSProperties;
  card?: React.CSSProperties;
  cardImage?: React.CSSProperties;
  cardContent?: React.CSSProperties;
  cardTitle?: React.CSSProperties;
  cardSubtitle?: React.CSSProperties;
  rating?: React.CSSProperties;
  starIcon?: React.CSSProperties;
  buttonContainer?: React.CSSProperties;
  button?: React.CSSProperties;
  specialText?: React.CSSProperties;
  text?: React.CSSProperties;
};

const styles = {
  container: { paddingTop: 0, paddingBottom: 20 },
  subContainer: { maxWidth: "1200px", position: "relative" as "relative", margin: "0 auto", textAlign: "center" as "center" },
  containerTitle: {},
  containerCards: { display: "flex", flexWrap: "wrap" as "wrap", justifyContent: "center" as "center", gap: "20px" },
  card: { position: "relative" as "relative", width: "300px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" },
  cardImage: { minHeight: "350px", backgroundSize: "cover", backgroundPosition: "center" },
  cardContent: { position: "absolute" as "absolute", bottom: "10px", left: "10px", right: "10px", width: "calc(100% - 20px)", background: "white", opacity: 1, padding: "10px 15px" },
  cardTitle: { fontSize: "1.25rem", textAlign: "left" as "left" },
  cardSubtitle: { fontSize: "0.9rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#777", textAlign: "left" as "left" },
  rating: { display: "flex", position: "absolute" as "absolute", top: "-15px", right: "5px", justifyContent: "space-between", alignItems: "center" as "center", borderRadius: "5px", padding: "5px", backgroundColor: "#14c58a" },
  starIcon: { color: "white", marginRight: "5px", fontSize: "20px" },
  buttonContainer: { display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginTop: "30px" },
  button: { padding: "10px 20px", marginRight: "10px", backgroundColor: "#14c58a", color: "#fff", border: "none", borderRadius: "5px", fontSize: "1rem", cursor: "pointer" },
};