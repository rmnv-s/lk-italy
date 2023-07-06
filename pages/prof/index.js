import MainScreen from '../../components/mainScreen/mainScreen';
import profBG from '../../public/mainBlockProf.jpeg';
import Form from '../../components/form/form';

const Prof = () => {
  return (
    <>
      <MainScreen
        bgImage={profBG}
        heading='Trattamenti professionali'
        subheading='Prodotti esclusivi Linda Kristel per cliniche di Medicina Estetica, saloni di bellezza e spa.'
      />
      <Form />
    </>
  );
};

export default Prof;
