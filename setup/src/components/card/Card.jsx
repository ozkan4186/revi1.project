import React, { useState } from 'react'

import cartStyle from './card.module.css'

import { FaChevronLeft ,
  FaChevronRight

} from 'react-icons/fa';


const Card = ({data}) => {
  //? let sayac = 1
const [index,setIndex]=useState(0)
 
const {name,id,text,image,job}=data[index]

const checkNumber =(number)=>{
 if(number> data.length -1){
  return 0
 }
 if(number<0){
  return data.length -1
 }
 return number
}

  const arttır=()=> {
    setIndex((index)=>{
      let newIndex = index +1
      return checkNumber(newIndex)
    })
  }


  
  const azalt=()=> {
    setIndex((index)=>{
      let newIndex = index -1
      return checkNumber(newIndex)
    })
  }



 const suprise=()=>{
  let x = Math.round(Math.random()*data.length)
  console.log(x)
  if(x == index){
    x= index +1
  }
 setIndex( checkNumber(x))

   }
  
  

  return (
    <div className='main'> 
            <div className={cartStyle.container} key={id}> 
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
            <span><FaChevronLeft className='sol' onClick={azalt} /> <FaChevronRight className='sag'  onClick={arttır}/></span> <br />
            <button onClick={suprise}>Suprise Me</button>
            
            </div>
           
    </div>
  )
}

export default Card;