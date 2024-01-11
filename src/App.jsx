import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Records from './components/Records'
// import DB from './assets/Data'

function App() {
  const [count, setCount] = useState(0)
  const [category,setCategory]=useState(null);

  console.log(category);
  // console.log(DB.data[0])
  return (
    <>
    <h1 className="text-center text-5xl pt-8 h-1/5 bg-amber-200">Work Experience</h1>
    <Dashboard setCategory={setCategory}/>
    {category?(<Records category={category}/>):<></>}
    </>
  )
}

export default App
