import React,{useState,useEffect,useRef} from 'react';
import './AnimalCard.css'
import './Components.js'

let c=0;
function AnimalCard({
  foto,
  additional,
  name,
  Articul,
  size,
  
  showAdditional
}) {
  const [countt,countff]=useState(0); // это хук, который позволяет функциональному компоненту иметь состояние. 
                                      // Мы передаем начальное состояние в этой функции, и она возвращает нам переменную и функцию для обновления этого состояния.
  const [sum,sumf]=useState(0);
  const [text,textf]=useState('');
  const reff = useRef(0); //это перехватчик React, который позволяет ссылаться на значение, не необходимое для отрисовки.
  
  useEffect(() => {   //Один из трёх больших встроенных React Hooks и один из самых популярных хуков. 
                      //Он даёт возможность создавать условные изменения, ссылающиеся на состояние программы внутри функционального компонента.
    reff.current=c;
    console.log(reff.current)
  
  });

function zakaz(){
  countff(countt + 1)
  size= size.split(" ").join("")
  size=parseInt(size,10);
  sumf(sum+size);
  c=c+size;
}

function minus(){
  if (countt>0) {
  countff(countt - 1)
  size= size.split(" ").join("")
  size=parseInt(size,10);
  sumf(sum-size);
  c=c-size;


  }
}

function KorzinaM() {
  if (countt>0){
  alert("Товар заказан. Количество: " +countt + " Стоимость: "+sum)
  textf('Заказано') ;
  }else alert("Выберите количество товара");
};



const buttonRef = useRef();
const buttonRef2 = useRef();
const buttonRef3 = useRef();

const disableButton = () =>{
  if (countt>0){
  buttonRef.current.disabled = true; 
  buttonRef2.current.disabled = true;
  buttonRef3.current.disabled = true;
}
 }


  return (
   
    <div className="animal-wrapper">
       <div>{foto}</div>
      <h2>{name}</h2>
      <h3>{Articul}</h3>
      <h4>{size} руб.</h4>
      
      
      <button onClick={() => showAdditional(additional)}>Подробнее</button>
      <button ref={buttonRef} onClick={zakaz}>Добавить</button>
      <button ref={buttonRef3} onClick={minus}>-</button>
      <button    ref={buttonRef2} onClick={() => {KorzinaM();disableButton()}}>Заказать</button>
      <div>Количество: {countt} 
      </div>
      <div>цена {sum}
      </div>

      <h1 >{text}</h1>
    </div>
  );
}

export default AnimalCard;