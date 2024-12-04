import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import React from "react";
import ThemedText from "../ThemedText";
import { useTheme as useMaterialUITheme } from '@mui/material/styles';  // Pour Material-UI

export function formatDescription(description: string, highlightStyle?: React.CSSProperties) { // Fonction pour formater le texte en texte spécial
    const parts = description.split(/(\*\*\*.*?\*\*\*|\n)/g); // Divise le texte par les segments `***...***` et les sauts de ligne `\n`
    const materialTheme = useMaterialUITheme();

    return parts.map((part, index) => {
        if (part === "\n") { // Gère les sauts de ligne
            return <br key={index} />;
        }

        if (part.startsWith("***") && part.endsWith("***")) { // Surligne les parties entourées par `***`
            return (
                <span key={index} style={{ color: materialTheme.palette?.primary?.main, fontWeight: 'bold', ...highlightStyle }}>
                    {part.slice(3, -3)}
                </span>
            );
        }

        return ( // Texte normal
            <span key={index}>
                {part}
            </span>
        );
    });
}

function Presentation({ data, style }: { data: { title: string; description: string; image: string; bgColor: string; }[]; highlightStyle?: React.CSSProperties; textStyle?: React.CSSProperties; style?: StyleType; }) { // Composant Presentation
    return (
        data?.map((item, index) => (
            <Container key={index} fluid className="home-about-section" style={{ ...styles.container, ...style?.container }}>
                <Container>
                    <Row>
                        <Col md={8} className="home-about-description">
                            <ThemedText style={{ ...style?.text }}>
                                <h1 style={{ ...styles.title, ...style?.title }}>{formatDescription(item.title, style?.specialText)}</h1>
                                <p className="home-about-body" style={{ ...styles.bodyText, ...style?.bodyText }}>
                                    {formatDescription(item.description, style?.specialText)}
                                </p>
                            </ThemedText>
                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt style={{ ...styles.tiltContainer, ...style?.tiltContainer }}>
                                <img src={item.image} className="img-fluid" alt="avatar" style={{ ...styles.avatarImage, ...style?.avatarImage }} />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        ))
    );
}

type StyleType = {
    container?: React.CSSProperties;
    title?: React.CSSProperties;
    bodyText?: React.CSSProperties;
    tiltContainer?: React.CSSProperties;
    avatarImage?: React.CSSProperties;
    specialText?: React.CSSProperties;
    text?: React.CSSProperties;
};

const styles = {
    container: {
        paddingBottom: 20,
    },
    title: {
        fontSize: "2.6em",
    },
    bodyText: {
        fontSize: "1.2rem",
    },
    tiltContainer: {
        backgroundColor: "#14c58a",
        borderRadius: "50%",
        overflow: "hidden",
    },
    avatarImage: {
        position: "relative" as "relative",
        left: "15px",
        top: "50px",
    },
};

export default Presentation;