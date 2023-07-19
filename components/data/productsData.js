import { v4 as uuidv4 } from 'uuid';
import corpoPerfetto from '../../public/cardImages/Corpo-perfetto.png';
import ambiantPlus from '../../public/cardImages/Ambiant-Plus.png';
const productsData = [
  {
    id: uuidv4(),
    // img: card1,
    title: 'Nettoyage e tonifiant',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Ambiant',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Biologic renovation',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Caviar',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Hydronourrissante',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Maschera',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Peau lisse',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Phytoestrogènes',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Platinum',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Satin',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Soleil',
    text: 'Prodotti di questa linea sono studiati per la detersione, la tonificazione e la cura quotidiana della pelle del viso e del corpo.',
    tag: 'Face',
  },

  {
    id: uuidv4(),
    img: corpoPerfetto,
    title: 'Corpo perfetto',
    text: 'Il peptide attivatore della sintesi di elastina, gli idrolizzati dicollagene e di elastina e gli estratti vegetali  ricchi di fitoestrogeni rassodano la pelle del corpo, ne aumentano la tonicità e l’elasticità, nonché migliorano la forma del seno.',
    tag: 'Corpo Perfetto',
  },
  {
    id: uuidv4(),
    img: ambiantPlus,
    title: 'Ambiant Plus',
    text: 'PIl peptide attivatore della sintesi di elastina, gli idrolizzati dicollagene e di elastina e gli estratti vegetali  ricchi di fitoestrogeni rassodano la pelle del corpo, ne aumentano la tonicità e l’elasticità, nonché migliorano la forma del seno.',
    tag: 'Corpo Perfetto',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Alginate mask calco perlato',
    text: 'Per la cura quotidiana del tuo corpo',
    tag: 'Prof',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'All-season peelings',
    text: 'Per la cura quotidiana del tuo corpo',
    tag: 'Prof',
  },
  {
    id: uuidv4(),
    // img: card1,
    title: 'Corpo perfetto',
    text: 'Per la cura quotidiana del tuo corpo',
    tag: 'Prof',
  },
];

export const bodyProducts = () => {
  return productsData.filter((product) => product.tag === 'Corpo Perfetto');
};

export default productsData;
