import React from 'react'
import data from './data'
import './Cards.css'
const Cards = () => {
  return (
      <div className='cards-container'>
        {data.map((elem)=>{
          return (
            <div className='card-self'>
              <img src={elem.pics}/>
              <h1>{elem.title}</h1>
              <p>{elem.Price}</p>
              <button>Add to cart</button>
            </div >
          )
        })}
        
      </div >
  )
}

export default Cards