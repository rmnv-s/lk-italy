import MainScreen from '../../components/mainScreen/mainScreen';
import faceBG from '../../public/mainBlockFace.png';
import Form from '../../components/form/form';
const Face = () => {
  return (
    <>
      <MainScreen
        bgImage={faceBG}
        heading='Per la cura del tuo viso'
        subheading='Texture di lusso e l`efficacia senza pari dei migliori prodotti Linda Kristel'
      />
      <Form />
    </>
  );
};

export default Face;
