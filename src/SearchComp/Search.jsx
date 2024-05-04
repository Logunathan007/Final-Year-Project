import React from 'react'
import './Search.css'

const Search = ({setSearchKey,searchKey}) => {
  return (
    <div className='search'>
        <input 
            placeholder='Search...'
            autoFocus
            onChange={(e)=>{
                setSearchKey(e.target.value)
            }}
            value = {searchKey}
        />
    </div>
  )
}

export default Search