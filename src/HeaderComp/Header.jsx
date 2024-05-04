import React from 'react'
import './Header.css'

const Header = ({setPageVal,pageVal}) => {
  return (
    <div className='header'>
        <button className='all all-button'
          onClick={
            ()=>{
              setPageVal("all")
            }
          }
        >
            All
        </button>
        <button
          className='faulty-button'
          onClick={
            ()=>{
              setPageVal("faulty")
            }
          }
        >
            Faulty
        </button>
    </div>
  )
}

export default Header