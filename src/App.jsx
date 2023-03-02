import { useEffect, useState } from 'react'
import { Slider } from './Slider'

export  function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/sliders")
    .then(response => response.json())
    .then(data=>setData(data))
    .catch(er=>console.log(er))
  },[])


  return (
    <div>
      <Slider slides={data} />


    </div>
  )
}

