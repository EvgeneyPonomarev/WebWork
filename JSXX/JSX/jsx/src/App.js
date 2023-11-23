import React from "react";
import Foo from "./Foo"
import './App.css';

const Header = () => {
    return (
      <header className="header"/>
    );
};

const MovieList = (props) => {
    return (
        <div className="movie-list">
            <Foo title = "Диета моделей «2-4 кг за 3 дня»"  image = 'https://www.ayzdorov.ru/images/dieta/dieta_modeleii78_m.jpg' description = 'Суть: если нужно экстренно похудеть, модели пользуются диетой, рассчитанной на 3 дня.'/>
            <Foo title = 'Диета на свежевыжатых соках за 3 дня'  image = 'https://www.ayzdorov.ru/images/dieta/svejivijatie_soki_m.jpg' description = 'Суть: натуропат Чери Калбом уверена что эти напитки обладают целебными свойствами.'/>
            <Foo title = 'Диета на вареных овощах за 3 дня'  image = 'https://www.ayzdorov.ru/images/dieta/dieta_na_varennih_ovoshah_m.jpg' description = 'Суть: это одна из наиболее популярных методик избавления от лишнего веса.'/>
            <Foo title = 'Диета основанная на Бананах за 3 дня'  image = 'https://www.ayzdorov.ru/images/dieta/bananovaya_dieta65_m.jpg' description = 'Суть: Употребление бананов в пищу положительно вляет на  здоровье человека.'/>
            <Foo title = 'Рисовая диета за 3 дня' image = 'https://www.ayzdorov.ru/images/dieta/risovaya-dieta-m.jpg' description = 'Суть: это жёсткий режим питания, целью является устранение ожирения и болезней почек.'/>
            <Foo title = 'Арбузная диета за 3 дня' image = 'https://www.ayzdorov.ru/images/dieta/arbyznaya_dieta4375_m.jpg' description = 'Суть: арбузная диета существует в трёх вариантах: жёсткая, облегчённая и свободная.'/>
            <Foo title = 'Куриная диета за 3 дня' image = 'https://www.ayzdorov.ru/images/dieta/kurinaja_dieta4567763.jpg' description = 'Суть: куриная диета – отличный вариант для тех людей, которые не отказаться от мясных блюд'/>
            <Foo title = 'Шоколадная диета за 3 дня' image = 'https://www.ayzdorov.ru/images/dieta/shokoladnaya_dieta_m6675352.jpg' description = 'Суть: Эта система похудения относится строгим и вредным.'/>
        </div>
    );
};

function App() {
  return (
      <div className="app">
          <Header/>
          <MovieList/>
      </div>
  );
}

export default App;
