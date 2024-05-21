import { nanoid } from 'nanoid';
import sport_1x from '../images/adult/sport_1_1x.png';
import sport_2x from '../images/adult/sport_1_2x.png';

const sportsAdults = [
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' jump boom boom ',
    title_2: 'джампинг',
  },
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' JUGGLING LAB ',
    title_2: 'жонглирование',
  },
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' ХАТХА-ЙОГА И ЖЕНСКИЕ ПРАКТИКИ  ',
    title_2: 'студия йоги',
  },
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' JUMP BOOM BOOM ',
    title_2: 'джампинг',
  },
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' JUGGLING LAB  ',
    title_2: 'жонглирование',
  },
  {
    key: nanoid(),
    img: { src1x: sport_1x, src2x: sport_2x },
    title_1: ' ХАТХА-ЙОГА И ЖЕНСКИЕ ПРАКТИКИ  ',
    title_2: 'студия йоги',
  },
];

export { sportsAdults };
