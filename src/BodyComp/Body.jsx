import React, { useState } from 'react'
import './Body.css'
import Screen from '../ScreenComp/Screen'
import Search from '../SearchComp/Search'
import Content from '../ContentComp/Content'

const Body = ({districts,selectDistrict,setSelectDistrict,lightIds,setLightIds,obj,setObj,selectPost,setSelectPost}) => {
    let [searchKey,setSearchKey] = useState("")
    let filterdDistricts = districts.filter((ele)=>{
      return ele.name.toLowerCase().startsWith(searchKey.toLowerCase())
    }) 
  return (
    <div className='body'>
        {(selectDistrict != null)?
            <Screen 
              selectDistrict={selectDistrict} 
              setSelectDistrict={setSelectDistrict}
              districts = {filterdDistricts}
              lightIds={lightIds}
              setLightIds={setLightIds}
              obj = {obj}
              setObj={setObj}
              selectPost={selectPost}
              setSelectPost={setSelectPost}
              />
            :<></>
        }
        <Search 
            searchKey = {searchKey}
            setSearchKey = {setSearchKey}
        />
        <Content 
            districts = {filterdDistricts}
            setSelectDistrict = {setSelectDistrict}
            selectDistrict = {selectDistrict}
        />
    </div>
  )
}

export default Body