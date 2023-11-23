const Zoo = {
    props: {
      card: Object,
    },
    template: `
    <div class='card'>
    <h2> {{ card.text }} </h2>
    <img :src = "card.png" class="png"/>
    <h3 v-if="card.yes">Доступен</h3>
    <h3 v-else>Не доступен</h3>
    <button> {{ card.price }} руб.</button>
    </div>
    `,
  }; 
  const app = Vue.createApp({
    components: {
      'card': Zoo,
    },
    data() {
      return {
        cards: [
          {text: 'Аквариум ', 
          price: 5000, 
          png: 'https://cozzyroom.com/wp-content/uploads/2018/03/3-5.jpg', 
          yes: false},
          {text: 'Дом для кошки',
           price: 12500,
            png: 'https://www.zookaluga.ru/upload/iblock/5e7/5e7374d49cf4ed8e8a86036cb2911d9e.jpg', 
            yes: false},
          {text: ' Корм Whiskas ',
           price: 888, 
           png: 'https://www.yg-market.ru/upload/iblock/201/8ym31fadzn43uzfw2utoi8u7obi4vtxv.jpg',
            yes: true},
          {text: 'Кость с канатом',
           price: 1500, 
           png: 'https://dogrog-shop.ru/image/cache/catalog/igrushki/kostskanatombolshaja-600x600.jpg', 
           yes: true},
        ],
      };
    },
  });
  app.mount('#app');
  