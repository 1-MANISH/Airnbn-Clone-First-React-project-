import React from 'react'
import "./CardFlex.css"
import Card from './card'
import {list} from "../../assets/cards-list.js"

function Cards() {

  return (
    <div className='cards-flex'>
        {
            list.map((card,i)=>(
                <Card card={card} key={i} />
              ))
                
        }
        
    </div>
  )
}

export default Cards