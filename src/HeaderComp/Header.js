import React from 'react'
import './Header.css'

const Header = ({setPageVal,pageVal}) => {
  return (
    <div className='header'>
        <button className='all'
          onClick={
            ()=>{
              setPageVal("all")
            }
          }
        >
            All
        </button>
        <button
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