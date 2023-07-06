import MainScreen from '../../components/mainScreen/mainScreen';
import aboutBG from '../../public/mainBlockAbout.jpeg';
import Form from '../../components/form/form';
const About = () => {
  return (
    <>
      <MainScreen
        bgImage={aboutBG}
        heading='LINDA KRISTEL'
        subheading='Tradizione e innovazione
      per la bellezza della tua pelle'
      />
      <Form />
    </>
  );
};

export default About;
