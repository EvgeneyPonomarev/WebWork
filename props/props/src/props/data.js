import Gorilla from "./Gorilla";
import Lion from "./lion";
import Zebra from "./zebra"
import Enot from "./enot"
import Zhiraf from "./zhiraf"

export default [
    {
      name: 'Лев',
      scientificName: 'Лев пантера',
      size: 250,
      diet: ['Хищное'],
      additional: {
        notes: 'Тут информация о гориллах',
        link: "https://en.wikipedia.org/wiki/Panthera_leo_leo"
      },
      pic: <Lion/>,
      
    },
    {
      name: 'Горилла',
      scientificName: 'Горная горилла',
      size: 365,
      diet: ['Травоядное'],
      additional: {
        notes: 'Тут информация о гориллах',
        link: 'https://ru.wikipedia.org/wiki/Горная_горилла'
      },
      pic: <Gorilla/>
    },
    {
      name: 'Зебра',
      scientificName: 'Степная зебра',
      size: 320,
      diet: ['Травоядное'],
      additional: {
        notes: 'Тут информация о зебрах',
        link: 'https://en.wikipedia.org/wiki/Zebra'
      },
      pic: <Zebra/>
    },
    {
      name: 'Енот',
      scientificName: 'Полоскун',
      size: 9,
      diet: ['Всеядное'],
      additional: {
        notes: 'Тут информация о енотах',
        link: 'https://ru.wikipedia.org/wiki/Енот-полоскун'
      },
      pic: <Enot/>
    },
    {
      name: 'Жираф',
      scientificName: 'Южноафриканский',
      size: 1200,
      diet: ['Травоядное'],
      additional: {
        notes: 'Тут информация о жирафах.',
        link: 'https://ru.wikipedia.org/wiki/Жираф'
      },
      pic: <Zhiraf/>
    }
  ]