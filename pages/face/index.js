import MainScreen from '../../components/mainScreen/mainScreen';
import faceBG from '../../public/mainBlockFace.png';
import Form from '../../components/form/form';
const Face = () => {
  return (
    <>
      <MainScreen
        bgImage={faceBG}
        heading='Per la cura del tuo corpo'
        subheading='Senti la cura per la bellezza, la salute e la giovinezza del tuo corpi con prodotti Linda Kristel'
      />
      <Form />
    </>
  );
};

export default Face;
