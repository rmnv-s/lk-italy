import MainScreen from '../../components/mainScreen/mainScreen';
import bodyBG from '../../public/mainBlockBody.jpeg';
const Body = () => {
  return (
    <MainScreen
      bgImage={bodyBG}
      heading='Per la cura del tuo corpo'
      subheading='Senti la cura per la bellezza, la salute e la giovinezza del tuo corpi con prodotti Linda Kristel'
    />
  );
};

export default Body;
