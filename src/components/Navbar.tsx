import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome, } from "react-icons/ai";
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { FaBook, FaPhoneAlt, FaStethoscope, FaUserMd } from "react-icons/fa";
import { useTheme as useMaterialUITheme } from '@mui/material/styles';
import { IconButton } from "@mui/material";
import { useTheme } from "../ThemeContext";

function NavBar() {
  const [expand, updateExpanded] = useState<any>(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const materialTheme = useMaterialUITheme();


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar style={{ width: '100%' }} expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"} >
      <Container style={{ width: '100%' }}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} style={{ width: '50px', height: '50px' }} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded"); }} >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse style={{ overflow: 'hidden', width: '100%' }} id="responsive-navbar-nav">
          <Nav style={{}} className="ms-auto" defaultActiveKey="#home">
            <Nav.Item style={{ width: '100%', height: '100%', paddingTop: '5px', marginLeft: 0 }}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ height: '50px' }} >
                <div style={{ width: '100%', marginBottom: '5px', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <AiOutlineHome color="#14c58a" style={{ fontSize: '26px', marginRight: 15, flexShrink: 0 }} />
                  </div>

                  <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <span>Accueil</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ width: '100%', height: '100%', paddingTop: '5px', marginLeft: 0 }}>
              <Nav.Link as={Link} to="/prestations" onClick={() => updateExpanded(false)} style={{ height: '50px' }} >
                <div style={{ width: '100%', marginBottom: '5px', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <FaStethoscope color="#14c58a" style={{ fontSize: '26px', marginRight: 15, flexShrink: 0 }} />
                  </div>

                  <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <span>Prestations</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ width: '100%', height: '100%', paddingTop: '5px', marginLeft: 0 }}>
              <Nav.Link as={Link} to="/equipes" onClick={() => updateExpanded(false)} style={{ height: '50px' }} >
                <div style={{ width: '100%', marginBottom: '5px', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <FaUserMd color="#14c58a" style={{ fontSize: '26px', marginRight: 15, flexShrink: 0 }} />
                  </div>

                  <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <span>Équipes</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ width: '100%', height: '100%', paddingTop: '5px', marginLeft: 0 }}>
              <Nav.Link as={Link} to="/annuaires" onClick={() => updateExpanded(false)} style={{ height: '50px' }} >
                <div style={{ width: '100%', marginBottom: '5px', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <FaBook color="#14c58a" style={{ fontSize: '26px', marginRight: 15, flexShrink: 0 }} />
                  </div>

                  <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <span>Annuaires</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ width: '300', height: '100%', paddingTop: '5px', marginLeft: 0 }}>
              <Nav.Link href='tel:+4100000000' onClick={() => updateExpanded(false)} style={{ height: '50px', width: '100%' }} >
                <div style={{ width: '100%', marginBottom: '5px', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                  <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <FaPhoneAlt color="#14c58a" style={{ fontSize: '26px', marginRight: 15, flexShrink: 0 }} />
                  </div>

                  <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <span>Appelez</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <div>
          <IconButton onClick={toggleTheme} sx={{ color: materialTheme.palette.text.primary, backgroundColor: materialTheme.palette.background.paper, '&:hover': { backgroundColor: materialTheme.palette.action.hover, }, borderRadius: '50%', padding: '10px', marginLeft: 2 }} >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />} {/* Change d'icône selon le mode */}
          </IconButton>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
