import "../../style.css"
import { presentations } from "./Presentation";
import Presentation from "../../components/sections/Presentation";
import Services from "../../components/sections/Service";
import { services } from "./Service";
import { characters } from "./Character";
import Character from "../../components/sections/Character";
import { steps } from "./Steps";
import Steps from "../../components/sections/Steps";
import { competances } from "./Competance";
import Competance from "../../components/sections/Competance";
import { useTheme as useMaterialUITheme } from '@mui/material/styles';
import FirstPresentation from "../../components/sections/FirstPresentation";

function Home() {
  const materialTheme = useMaterialUITheme();

  return (
    <section>
      <FirstPresentation />

      <Presentation data={presentations} style={{...styles, text: { color: materialTheme.palette.text.primary }, container: { backgroundColor: materialTheme.palette?.sections?.background1 }}} />

      <Services data={services} style={{...styles, text: { color: materialTheme.palette.text.primary }, container: { backgroundColor: materialTheme.palette?.sections?.background2 }}} />
      <Character data={characters} style={{...styles, text: { color: materialTheme.palette.text.primary }, container: { backgroundColor: materialTheme.palette?.sections?.background1 }}} />
      <Steps data={steps} style={{...styles, text: { color: materialTheme.palette.text.primary }, container: { backgroundColor: materialTheme.palette?.sections?.background2 }}} />
      <Competance data={competances} style={{...styles, container: { backgroundColor: materialTheme.palette?.sections?.background1 }, text: { color: materialTheme.palette.text.primary }, card: { backgroundColor: materialTheme.palette?.cards?.card1, color: materialTheme.palette?.cards?.text1 }}} />

    </section>
  );
}

export default Home;

const styles = {
  specialText: {
    color: "#14c58a", fontWeight: "bold"
  }
}