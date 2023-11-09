import { useState } from 'react'
import './App.css'

const handlerClick = (color) => {
  return console.log(color)
}

const Colors = (color) => {
    return (
    <div key={color.color} className="card" >
      <button onClick={() => handlerClick(color.color)}>
        {`${color.color}`}
      </button>
    </div>)
  }

let lista_de_colores = ["rojo", "naranja","amarillo", "verde","celeste", "azul", "violeta", "rosa"]

function App() {
  return (
    <div>

      {lista_de_colores.map((color) => (
        <Colors
          key={color}
          color={color}
        />))}

    </div>
  )
}

export default App

