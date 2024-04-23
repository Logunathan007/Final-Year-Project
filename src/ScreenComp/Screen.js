import React,{useState}from 'react'
import './Screen.css'

import ScreenContent from '../ScreenContentComp/ScreenContent'

const Screen = ({setFRefresh,frefresh,districts,setSelectDistrict,selectDistrict,selectPost,setSelectPost,lightIds,setLightIds,obj,setObj}) => {
  
  // let [selectPost,setSelectPost] = useState("")
  // let [lightIds,setLightIds] = useState(null);
  // let [obj,setObj] = useState(null);
  let arrow = " > "+selectPost;

  return (
    <div className='screen'>
        <div className='backbutton'
            onClick={()=>{
              if(selectDistrict[1] === -1){
                setSelectDistrict(null);
                setSelectPost("")
              }else if(selectPost === ""){
                setSelectDistrict(null);
              }else{
                setSelectPost("")
              }
            }}
        >
        </div>

        <div className='districtname'>
        {(selectPost !== "" ? selectDistrict[0]+arrow : selectDistrict[0])}
            <div 
              id='sync'
              onClick = {()=>{
                if(lightIds){
                  var temp = [...lightIds]
                  setLightIds(temp)
                  if(setFRefresh)
                    setFRefresh(!frefresh)
                }
              } 
              }
            >
              
            </div>
        </div>
        <ScreenContent 
          districts = {districts}
          selectDistrict = {selectDistrict}
          setSelectPost = {setSelectPost}
          selectPost = {selectPost}
          setLightIds = {setLightIds}
          lightIds = {lightIds}
          obj = {obj}
          setObj = {setObj}
        />
        
    </div>
  )
}

export default Screen