const Paric = {
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
      'card': Paric,
    },
    data() {
      return {
        cards: [
          {text: 'Салатов А. И.', 
          price: 2500, 
          png: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614563191_2-p-kartinka-cheloveka-na-belom-fone-3.jpg', 
          yes: false},
          {text: 'Мерешев Н. Б.',
           price: 3500,
            png: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614596249_12-p-muzhchina-kartinka-na-belom-fone-12.jpg', 
            yes: false},
          {text: 'Терентев А. С.',
           price: 3500, 
           png: 'https://www.automazionenews.it/wp-content/uploads/sites/2/2014/01/Fotolia_4573809_L.jpg',
            yes: true},
          {text: 'Симонов С. Ю.',
           price: 4500, 
           png: 'https://on-desktop.com/wps/Men___Male_Celebrity_Famous_Actor_Paul_Walker_extremely_happy_050756_.jpg', 
           yes: true},
        ],
      };
    },
    methods: {
      buyTicket(card) {
        card.tickets--;
        this.$emit('buy-ticket', card);
      }
    }
  });
  
  app.mount('#app');
  