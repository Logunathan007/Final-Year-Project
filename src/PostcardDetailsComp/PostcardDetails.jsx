import React,{useState,useEffect} from 'react'
import './PostcardDetails.css'
import ApiRequest from '../api/ApiRequest'

const PostcardDetails = ({obj,data, setData,dataVal,setDataVal,setObj,lightIds,setLightIds}) => {
    
  useEffect(() => {
    async function fetchData() {
      try {
        const arr = [];
        // Fetch data for each lightId
        for (let i = 0; i < 2; i++) {
          const api = `https://api.thingspeak.com/talkbacks/${obj.talkback_id}/commands/${lightIds[i]}.json?api_key=${obj.api_key}`;
          const response = await ApiRequest(api);
          arr.push(response.command_string);
        }
        var temp = [];
        temp.push(arr[0]?.substring(0,2))
        temp.push(arr[1]?.substring(0,2))
        temp.push((temp[0] === "OF" && temp[1] === "OF")?"BAD":"GOOD");
        setDataVal(temp)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();

  }, [lightIds]);
  return (
    <div className='postcarddetails'>
        <div id='row1'>
            <span className='left'> Status</span>
            {(dataVal.length !== 0)?
            <span className='right'
            style={(dataVal[2] === "BAD")?{backgroundColor:"red",color:"white"}:((dataVal[0] === "OF")?{backgroundColor:"orange"}:{backgroundColor:"green"})}
          > {dataVal[2]} </span>:
            <></>
            }

        </div>
        <div id='row2'>
            <span className='left'> Light status</span>
            {(dataVal.length !== 0)?
            <span className='right'>{(dataVal[0] === "OF")?"OFF":dataVal[0]}</span>
            :
            <></>
            }
        </div>
        <div id='row3'>
            <span className='left'>Backup Light</span>
            {(dataVal.length !== 0)?
            <span className='right'>{(dataVal[1] === "OF")?"OFF":dataVal[1]}</span>
            :
            <></>
            }
        </div>
    </div>
  )
}

export default PostcardDetails