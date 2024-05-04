import React,{useEffect,useState} from 'react'
import './Postcard.css'
import ApiRequest from '../api/ApiRequest'

const Postcard = ({obj,setSelectDistrict,data,dname, setData,dataVal,setDataVal,setObj,postObj,setSelectPost,setLightIds,selectDistrict}) => {
  let [status,setStatus] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const arr = [];
        // Fetch data for each lightId
        for (let i = 0; i < 2; i++) {
          const api = `https://api.thingspeak.com/talkbacks/${postObj?.talkback_id}/commands/${postObj?.light_ids[i]}.json?api_key=${postObj?.api_key}`;
          const response = await ApiRequest(api);
          arr.push(response.command_string);
        }
        var temp = [];
        temp.push(arr[0]?.substring(0,2))
        temp.push(arr[1]?.substring(0,2))
        temp.push((temp[0] === "OF" && temp[1] === "OF")?"BAD":"GOOD");
        setStatus(temp)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);
  // console.log("object data val",obj,data,dataVal)
  // console.log(dataVal);
  // console.log(lightIds)
  return (
    <div className='postcard'

      style={
        (status.length !== 0)?
          ((status[0] === "OF" && status[1] === "OF")?
            {backgroundColor:"red"}
            :
            ((status[0] === "ON")?
              {backgroundColor:"rgba(0, 255, 0, 0.643)"}
              :
              {backgroundColor:"orange"}
            )
          ):(
            {backgroundColor:'white'}
          )
      }

      onClick={()=>{
        if(!selectDistrict){
          setSelectDistrict([dname,-1])
        }
        setSelectPost(postObj?.post_name)
        setLightIds(postObj?.light_ids)
        setObj(postObj)
      }}
    >
      <span id='cityname'>{dname}</span>

      <span id='postname'>Name : {postObj?.post_name}</span>
      {
        (status.length !== 0)?
          ((status[0] === "OF" && status[1] === "OF")?
            <span id='status'> Status <span id='statustype'>BAD</span></span>
            :
            <span id='status'> Status <span id='statustype'>GOOD</span></span>
          )
          :
          <></>
      }

    </div>
  )
}

export default Postcard