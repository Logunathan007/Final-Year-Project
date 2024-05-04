import React from 'react'
import './Content.css'
import Card from '../CardComp/Card'

const Content = ({districts,setSelectDistrict,selectDistrict}) => {
  return (
    <div className='content'>
        {
            districts.map((ele,ind)=>(
                <Card 
                    key={ind}
                    index = {ind}
                    name = {ele.name}
                    setSelectDistrict = {setSelectDistrict}
                    selectDistrict = {selectDistrict}
                />
            ))
        }
    </div>
  )
}

export default Content