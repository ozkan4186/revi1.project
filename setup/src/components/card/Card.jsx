import React from 'react'
import CardStyle from './card.module.css'
const Card = ({data}) => {
//  const {id,name,job,image}=data
  return (
    <div>
    {data.map((item)=>{
        const{id,image,job,name,text}=item;
        return(
            <div className={CardStyle.container}  key={id} >
                <img src={image} alt="" />
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{text}</p>
            </div>

        )
    })}
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Card;