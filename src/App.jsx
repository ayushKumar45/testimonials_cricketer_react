import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials';
import reviews from './Data';
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200 py-12">
    <div className="text-center">
    <h1  className="text-4xl font-bold"> Indian Cricketers </h1>
    <div  className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
    <Testimonials reviews={reviews}></Testimonials>
    </div>
   </div>
  )
}

export default App;
