import { nanoid } from 'nanoid';
import sport_1x from '../images/adult/sport_1x.png';
import sport_2x from '../images/adult/sport_2x.png';
import sportIcon from '../images/adult/sport.svg';
import dance_1x from '../images/adult/dance_1x.png';
import dance_2x from '../images/adult/dance_2x.png';
import danceIcon from '../images/adult/dance.svg';
import artist_1x from '../images/adult/artist_1x.png';
import artist_2x from '../images/adult/artist_2x.png';
import artistIcon from '../images/adult/artist.svg';
import musik_1x from '../images/adult/musik_1x.png';
import musik_2x from '../images/adult/musik_2x.png';
import musicIcon from '../images/adult/musik.svg';
import photo_1x from '../images/adult/photo_1x.png';
import photo_2x from '../images/adult/photo_2x.png';
import photoIcon from '../images/adult/photo.svg';
import theatre_1x from '../images/adult/theatre_1x.png';
import theatre_2x from '../images/adult/theatre_2x.png';
import theatreIcon from '../images/adult/theatre.svg';
import progekt_1x from '../images/adult/project_1x.png';
import progekt_2x from '../images/adult/project_2x.png';
import progektIcon from '../images/adult/project.svg';
import hobby_1x from '../images/adult/hobby_1x.png';
import hobby_2x from '../images/adult/hobby_2x.png';
import hobbyIcon from '../images/adult/hobby.svg';

const adultsData = [
  {
    id: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    icon: sportIcon,
    space: 'Спорт',
  },
  {
    id: nanoid(),
    img: { src1x: dance_1x, src2x: dance_2x },
    icon: danceIcon,
    space: 'Танцы',
  },
  {
    id: nanoid(),
    img: { src1x: theatre_1x, src2x: theatre_2x },
    icon: theatreIcon,
    space: 'Театральное  искусство',
  },
  {
    id: nanoid(),
    img: { src1x: musik_1x, src2x: musik_2x },
    icon: musicIcon,
    space: 'Музыка',
  },
  {
    id: nanoid(),
    img: { src1x: photo_1x, src2x: photo_2x },
    icon: photoIcon,
    space: 'Фото и видео',
  },
  {
    id: nanoid(),
    img: { src1x: artist_1x, src2x: artist_2x },
    icon: artistIcon,
    space: 'Художественное творчество',
  },
  {
    id: nanoid(),
    img: { src1x: progekt_1x, src2x: progekt_2x },
    icon: progektIcon,
    space: 'ПРОЕКТЫ',
  },
  {
    id: nanoid(),
    img: { src1x: hobby_1x, src2x: hobby_2x },
    icon: hobbyIcon,
    space: 'Интеллектуальный досуг',
  },
];

export { adultsData };
