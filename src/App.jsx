import Counter from './Counter';
import './App.css'
import Batsman from './Batsman';

function App() {
  const clickHandling = () => {
    alert ('Clicked Button');
  }
  
  const addNumber = (num) => {
    const newNumber = num + 5;
    alert (newNumber);
  }
  return (
    <>
    <h1>React + Vite</h1>
    <Counter></Counter> 
    <Batsman></Batsman>
    <br />
    {/* <button className='button' onclick = "clickHandling ()">Click Me</button> */}
    <button className='button' onClick= {clickHandling}>Click Me</button>
    <br/>
    <button className='button' onClick= {function clickHandling () {
      alert ('Now Click me!')
    }}>Click Me 2</button>
    <br />
    <button className='button' onClick= {() => {
      alert ('Clicked btn 3!')
    }}>Clicked me 3</button>
    <br />
    <button className='button' onClick={() => addNumber(7)}>Clicked me 4</button>
    </>
          
  )
}

export default App


