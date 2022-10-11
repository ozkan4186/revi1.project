import ButtonStyle from './Button.module.css'

import React from 'react'

const Button = () => {

const suprise=()=>{
  let x = Math.round(Math.random()*3)
  console.log(x)
}




  return (
    <div>
        <button onClick={suprise}>Suprise me</button>
    </div>
  )
}

export default Button