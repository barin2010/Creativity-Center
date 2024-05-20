import { nanoid } from 'nanoid';
import americant_1x from '../../images/posters/americant_x1.png';
import americant_2x from '../../images/posters/americant_x2.png';
import dance_1x from '../../images/posters/dance_x1.png';
import dance_2x from '../../images/posters/dance_x2.png';

const postersData = [
  {
    id: nanoid(),
    adress: 'ул. Маршала Катукова, д. 8',
    speeches: ' Выступление',
    name: 'ЛЕБЕДИНОЕ ОЗЕРО',
    date: ' Смена: 20-24 августа',
    img: { src1x: americant_1x, src2x: americant_2x },
  },
  {
    id: nanoid(),
    adress: 'вул. Гнатюка, 11',
    speeches: ' Выступление',
    name: 'МАЛЕНЬКА БАБА-ЯГА',
    date: ' 21 ТРАВНЯ - 30 ЧЕРВНЯ ',
    img: { src1x: dance_1x, src2x: dance_2x },
  },
  {
    id: nanoid(),
    adress: 'вул. Гнатюка, 11',
    speeches: ' Вистава',
    name: 'ПЛИВЕ ЧОВЕН',
    date: ' 22 ТРАВНЯ - 13 ЧЕРВНЯ ',
    img: { src1x: americant_1x, src2x: americant_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, пл. Данила Галицького, 1',
    speeches: ' Вистава',
    name: 'ВЕСЕЛІ АНГЕЛЯТА',
    date: ' 25 ТРАВНЯ - 30 ЧЕРВНЯ',
    img: { src1x: dance_1x, src2x: dance_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, пл. Данила Галицького, 1',
    speeches: ' Выступление',
    name: 'ПІДКОВА НА ЩАСТЯ',
    date: '26 ТРАВНЯ ',
    img: { src1x: americant_1x, src2x: americant_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, пл. Данила Галицького, 1',
    speeches: ' Выступление',
    name: 'СТУК-ГРЮК',
    date: ' 01 - 23 ЧЕРВНЯ ',
    img: { src1x: dance_1x, src2x: dance_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, пл. Данила Галицького, 1',
    speeches: ' Дитяча вистава',
    name: 'ЧЕРВОНА ШАПОЧКА',
    date: ' 01 - 30 ЧЕРВНЯ ',
    img: { src1x: americant_1x, src2x: americant_2x },
  },
  {
    id: nanoid(),
    adress: 'вул. Театральна, 22',
    speeches: ' Выступление',
    name: 'МІСТЕР ХАОС',
    date: ' 01 ЧЕРВНЯ ',
    img: { src1x: dance_1x, src2x: dance_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, пл. Данила Галицького, 1',
    speeches: ' Дитяча вистава',
    name: 'ЗНАЙДЕНА ЛЯЛЬКА',
    date: ' 02 - 04 ЧЕРВНЯ ',
    img: { src1x: americant_1x, src2x: americant_2x },
  },
  {
    id: nanoid(),
    adress: 'м. Львів, вул. Лесі Українки, 1',
    speeches: ' Дитяча вистава',
    name: 'ПОПЕЛЮШКА',
    date: ' 02 ЧЕРВНЯ ',
    img: { src1x: dance_1x, src2x: dance_2x },
  },
];

export { postersData };
