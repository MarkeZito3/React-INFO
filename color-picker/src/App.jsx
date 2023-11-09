import { useState } from 'react'
import './App.css'

let lista_de_colores = ["rojo", "naranja","amarillo", "verde","celeste", "azul", "violeta", "rosa"]

function App() {

  const [nombreColor, setNombreColor] = useState("")
  
  const handlerClassColor = (color) => {
    setNombreColor(color)
  }
  const Colors = (color) => {
    return (
    <div key={color.color} className={`card`} >
      <button className={`${color.color}`} onClick={() => handlerClassColor(color.color)}>
        {`${color.color}`}
      </button>
    </div>)
  }

  return (
    <div className={`containter ${nombreColor}`}>
        <div className='btn-col'>
        {lista_de_colores.map((color) => (
          <Colors
            key={color}
            color={color}
          />))}
        <button className='default' onClick={() => setNombreColor("")}>Default uwu</button>
      </div>
    </div>
  )
}

export default App

