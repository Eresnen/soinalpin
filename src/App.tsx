import { useEffect, useState } from 'react'
import { useTheme as useMaterialUITheme } from '@mui/material/styles';  // Pour Material-UI
import Preloader from "./pages/Pre";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Equipes from "./pages/Equipes/Equipes";
import Prestations from "./pages/Prestations/Prestations";
import Footer from "./components/Footer";
import Annuaires from "./pages/Annuaires/Annuaires";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrestationsData } from './pages/Prestations/PrestationsData';
import { teamMembers } from './pages/Equipes/EquipesData';
import { AnnuairesData } from './pages/Annuaires/AnnuairesData';

const App: React.FC = () => {
  const materialTheme = useMaterialUITheme(); // Accès au thème de Material-UI
  const [load, upadateLoad] = useState<boolean>(true); // Ajoutez le state load si nécessaire


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"} style={{ background: materialTheme.palette.background.default, minHeight: '100vh', position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations data={PrestationsData} />} />
          <Route path="/equipes" element={<Equipes data={teamMembers} />} />
          <Route path="/annuaires" element={<Annuaires data={AnnuairesData} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
