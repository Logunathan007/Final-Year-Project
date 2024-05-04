import React, { useEffect, useState } from 'react';
import './FaultyPage.css';
import ApiRequest from '../api/ApiRequest';
import Postcard from '../PostcardComp/Postcard';
import Screen from '../ScreenComp/Screen';

const FaultyPage = ({ districts,selectDistrict,setSelectDistrict,lightIds,setLightIds,obj,setObj,selectPost,setSelectPost }) => {
  let [filteredDistricts, setFilteredDistricts] = useState([]);
  let [frefresh,setFRefresh] = useState(true);
  useEffect(() => {
    const fetchDataForDistricts = async () => {
      const filteredData = [];

      for (const district of districts) {
        if (district?.post) {
          const promises = district.post.map(async (element) => {
            try {
              const response = await fetchData(
                district.name,
                element.post_no,
                element.talkback_id,
                element.api_key,
                element.light_ids
              );
              if (response) {
                filteredData.push([district.name, element]);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          });

          await Promise.all(promises);
        }
      }

      setFilteredDistricts(filteredData);
    };

    fetchDataForDistricts();
  }, [frefresh]);

  async function fetchData(name, no, talkback_id, api_key, light_ids) {
    try {
      const arr = [];
      for (let i = 0; i < 2; i++) {
        const api = `https://api.thingspeak.com/talkbacks/${talkback_id}/commands/${light_ids[i]}.json?api_key=${api_key}`;
        const response = await ApiRequest(api);
        arr.push(response.command_string);
      }
      const temp = [
        arr[0]?.substring(0, 2),
        arr[1]?.substring(0, 2)
      ];
      return (temp[0] === 'OF');
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  // console.log(filteredDistricts);
  return (
    <div className='faultypage'>
      {(selectDistrict != null)?
            <Screen 
              setFRefresh = {setFRefresh}
              frefresh = {frefresh}
              selectDistrict={selectDistrict} 
              setSelectDistrict={setSelectDistrict}
              districts = {[]}
              lightIds={lightIds}
              setLightIds={setLightIds}
              obj = {obj}
              setObj={setObj}
              selectPost={selectPost}
              setSelectPost={setSelectPost}
              />
            :<></>
        }
      <div id='fsync'
        onClick={()=>{
          setFRefresh(!frefresh)
        }}
      >
        
      </div>
      {
        (filteredDistricts.length !== 0)?

      filteredDistricts.map((element, index) => (
          <Postcard
            key={index} 
            dname={element[0]}
            postObj={element[1]}
            setSelectPost={setSelectPost}
            setLightIds={ setLightIds}
            setObj={setObj}
            selectDistrict={selectDistrict} 
            setSelectDistrict={setSelectDistrict}
          />
        ))
        :
        <center>All lights are Good...</center>
        }
    </div>
  );
};

export default FaultyPage;
