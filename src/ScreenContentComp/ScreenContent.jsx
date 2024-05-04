import React,{useState} from 'react'
import './ScreenContent.css'
import Postcard from '../PostcardComp/Postcard.jsx'
import PostcardDetails from '../PostcardDetailsComp/PostcardDetails.jsx'
import Empty from '../EmptyComp/Empty.jsx'

const ScreenContent = ({obj,setObj,districts,selectDistrict,setSelectDistrict,setSelectPost,setLightIds,selectPost,lightIds}) => {
  let [data, setData] = useState([]); 
  let [dataVal,setDataVal] = useState([]);
  
  return (
    <div className='screencontent'>
      {
        (selectPost === "")?
          ((districts[selectDistrict[1]]?.post)?
            districts[selectDistrict[1]].post.map((ele,ind)=>(

              <Postcard
                key = {ind}
                postObj = {ele}
                obj = {obj}
                dname = {selectDistrict[0]}
                selectDistrict = {selectDistrict}
                setSelectDistrict={setSelectDistrict}
                setObj = {setObj}
                setSelectPost = {setSelectPost}
                lightIds = {lightIds}
                setLightIds = {setLightIds}
              />
            )): 
        (<Empty 
          str = {"Street Light is not Configured..."}
        />)
        ):
        (
          <PostcardDetails
            obj = {obj}
            setObj = {setObj}
            data = {data}
            setData = {setData}
            dataVal = {dataVal}
            setDataVal = {setDataVal}
            setLightIds = {setLightIds}
            lightIds = {lightIds}
          />
        )
      }
    </div>
  )
}

export default ScreenContent