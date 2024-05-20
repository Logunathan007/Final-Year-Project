import React, {useState} from 'react'
import './Header.css'

const Header = ({setPageVal,pageVal}) => {

  const [isAllActive, setIsAllActive] = useState(true);
  const [isFaultyActive, setIsFaultyActive] = useState(false);

  const buttonActive = {
    backgroundColor: 'blue',
    color: "white"
  }

  const buttonInActive = {
    backgroundColor: 'white',
    color: "black"
  }
  const handleAllClick = () => {
    setPageVal("all");
    setIsAllActive(true);
    setIsFaultyActive(false);
  }

  const handleFaultyClick = () => {
    setPageVal("faulty");
    setIsFaultyActive(true);
    setIsAllActive(false);
  }

  return (
    <div className='header'>
        <button className='all all-button'
          style={isAllActive ? buttonActive : buttonInActive}
          onClick={handleAllClick}
        >
            All
        </button>
        <button
          style={isFaultyActive ? buttonActive : buttonInActive}
          className='faulty-button'
          onClick={handleFaultyClick}
        >
            Faulty
        </button>
    </div>
  )
}

export default Header