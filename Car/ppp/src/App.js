import './App.css';
import capi from './car.jpg'
import capi2 from './race.gif'
import capi3 from './fire.gif'

function App() {
  return (
    <div className="App">
        <div className="ContentDiv">
          <div className='TopDiv'>
          <font size="5"><h1 align="center" >Деревянные автомобили на газовом топливе времен Второй мировой войны</h1></font>
          </div>
            <div className='LeftDiv'><img src={capi} width= "523" height="1386" /></div>
            <div className='RightDiv'>
              <div className='RDChild'>
              <font size="4"><h1 align="center" >Во время Второй мировой войны в Европе использовалось много деревянных вагонов. Говорят, что в то время в Европе насчитывалось 9 миллионов автомобилей на дровах. Древесина использовалась в качестве источника топлива из-за нормирования бензина для военных нужд. Итак, как работает автомобиль на дровах? Хорошо, я должен признать, что на самом деле не понимаю химии, но это выглядит примерно так. Древесину помещают в герметичную банку, которая затем нагревается паром до 1300 градусов по Цельсию.</h1></font>
              </div>
              <div className='RDChild'>
              <font size="4"><h1 align="center" >В этой камере с дефицитом кислорода древесина будет выделять газы, содержащие азот, водород, углекислый газ и метан, также известные как СИНТЕЗ-ГАЗ. Полученный водород затем используется в качестве топлива для питания двигателя автомобиля.</h1></font>
              </div>
            </div>
          <div className='BottomDiv'><img src={capi2} width= "1870" height="240" /></div>
        </div>
    </div>
  );
}

export default App;