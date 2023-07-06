import MainScreen from '../../components/mainScreen/mainScreen';
import bodyBG from '../../public/mainBlockBody.jpeg';
import Form from '../../components/form/form';
const Body = () => {
  return (
    <>
      <MainScreen
        bgImage={bodyBG}
        heading='Per la cura del tuo viso'
        subheading='Texture di lusso e l`efficacia senza pari dei migliori prodotti Linda Kristel'
      />
      <Form />
    </>
  );
};

export default Body;
