import styles from "../styles/Home.module.css";
import HeaderContent from "../components/headerContant/headerContant";
import BlockPage from "../components/blockPage/blockPage";
import About from "../components/about/about";
import Form from "../components/form/form";

import blockFace from "../public/blockFace.webp";
import blockBody from "../public/blockBody.webp";
import blockProf from "../public/blockProf.webp";

export default function Home() {
  return (
    <>
      <HeaderContent />
      <About />

      <BlockPage
        img={blockFace}
        bgrFace={true}
        title="Linda Kristel per la cura del viso"
        subtitle="Qualità, ricerca, avanguardia nella prevenzione e nei trattamenti antinvecchiamento; questi gli obiettivi degli specialisti dei laboratori Linda Kristel."
      />

      <BlockPage
        img={blockBody}
        reverse={true}
        title="Linda Kristel per la cura del corpo"
        subtitle="Gli esclusivi prodotti Linda Kristel vengono utilizzati da esperti professionisti, nei più importanti centri di medicina estetica e cliniche dermatologiche."
      />

      <BlockPage
        img={blockProf}
        bgrProf={true}
        title="Trattamenti professionali Linda Kristel"
        subtitle="Gli esclusivi prodotti Linda Kristel vengono utilizzati da esperti professionisti, nei più importanti centri di medicina estetica e cliniche dermatologiche."
      />

      <Form />
    </>
  );
}
