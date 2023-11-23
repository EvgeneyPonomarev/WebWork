import Meatballs from "./Meatballs";
import Chicken from "./Chicken"
import Shaurma from "./Shaurma"
import Pilaf from "./Pilaf"
import Beef from "./Beef"


export default [
    {
      name: 'Говядина в сметанном соусе с картофелем.',
      scientificName: 'В составе блюда: картошка,говядина, сметанный соус.',
      size: 340,
      diet: ['550 рублей'],
      additional: {
        notes: 'Заказ еды на дом.',
        link: "https://www.delivery-club.ru"
      },
      pic: <Beef/>,
      
    },
    {
      name: 'Тефтели из свинины в горчичном соусе.',
      scientificName: 'В составе блюда: тефтели из свинины, горчичный соус.',
      size: 380,
      diet: ['600 рублей'],
      additional: {
        notes: 'Заказ еды на дом',
        link: 'https://www.delivery-club.ru'
      },
      pic: <Meatballs/>
    },
    {
      name: 'Курица запеченая с яблоками по турецки.',
      scientificName: 'В составе блюда: курица, запеченные яблоки.',
      size: 700,
      diet: ['1000 рублей'],
      additional: {
        notes: 'Заказ еды на дом',
        link: 'https://www.delivery-club.ru'
      },
      pic: <Chicken/>
    },
    {
      name: 'Шаурма большая с курицей по армянски.',
      scientificName: 'В составе блюда: лаваш, курица, помидор, огурец, соус.',
      size: 230,
      diet: ['470 рублей'],
      additional: {
        notes: 'Заказ еды на домю.',
        link: 'https://www.delivery-club.ru'
      },
      pic: <Shaurma/>
    },
    {
      name: 'Плов с говядиной и запеченными овощями.',
      scientificName: 'В составе блюда: плов, говядина, запеченные овощи.',
      size: 300,
      diet: ['570 рублей'],
      additional: {
        notes: 'Заказ еды на дом.',
        link: 'https://www.delivery-club.ru'
      },
      pic: <Pilaf/>
    }
  ]