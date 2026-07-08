import Counter from './Counter';
import './App.css'
import Batsman from './Batsman';
import Library from './Library';
import Users from './Users';
import { Suspense } from 'react';
// import Friends from './Friends';
import Posts from './Posts';

const fetchPromise = fetch ('https://jsonplaceholder.typicode.com/users')
.then (res => res.json ())

// const fetchFriends =async () => {
//   const res =await fetch ('https://jsonplaceholder.typicode.com/users');
//   return res.json ();
// }

const fetchPromise3 =async () => {
  const res =await fetch ('https://jsonplaceholder.typicode.com/posts');
  return res.json ();
}

function App() {
  // const friendsPromise = fetchFriends ();
  const postsPromise = fetchPromise3 ();
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
    <Suspense fallback = {<p>Loading...</p>}>
      <Users fetchPromise = {fetchPromise}></Users>
    </Suspense>
    {/* <Suspense fallback = {<p>Friends are coming soon for treat...</p>}>
      <Friends friendsPromise = {friendsPromise}></Friends>
    </Suspense> */}
    <Suspense fallback = {<p>Posts are coming...</p>}>
      <Posts postsPromise = {postsPromise}></Posts>
    </Suspense>
    <Library></Library>
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


