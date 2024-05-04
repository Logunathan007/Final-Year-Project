import React from 'react'
import './Card.css'

const Card = ({index,name,setSelectDistrict,selectDistrict}) => {
  return (
    <div className='card' onClick={()=>{
        setSelectDistrict([name,index])
        }}
    >
        {name}

    </div>
  )
}

export default Card