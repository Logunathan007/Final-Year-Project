import React,{useState} from 'react';
import './App.css';
import Header from './HeaderComp/Header';
import Body from './BodyComp/Body';
import FaultyPage from './FaultyPageComp/FaultyPage';


function App() {
  let [selectPost,setSelectPost] = useState("")
  let [lightIds,setLightIds] = useState(null);
  let [obj,setObj] = useState(null);
  let [selectDistrict,setSelectDistrict] = useState(null) //[name,index]
    
  // let url = `https://api.thingspeak.com/talkbacks/${talkback_id}/commands/${command_id}.json?api_key=${api_key}`
  let [faultyData,setFaultyData] = useState([])
  
  let [pageVal,setPageVal] = useState("all")
  const districts = [  
    { name: "Ariyalur" },
    { name: "Chennai", 
      post: [
      { //OF51724_40412090_E360PD6K3HU3AXA0
        post_no:1,
        post_name:"Post-1",
        talkback_id:"51724",
        api_key:"E360PD6K3HU3AXA0",
        light_ids:["40412090","40412185"]
      },
      {
        post_no:2,
        post_name:"Post-2",
        talkback_id:"51724",
        api_key:"E360PD6K3HU3AXA0",
        light_ids:["40511721","40511722"]
      }
      ]
    },
    { name: "Coimbatore",
      post: [
          { //ON51887_40600626_LFXR16423AQMLJJ2
            post_no:1,
            post_name:"Post-1",
            talkback_id:"51887",
            api_key:"LFXR16423AQMLJJ2",
            light_ids:["40600626","40600627"]
          },
          {
            post_no:2,
            post_name:"Post-2",
            talkback_id:"51887",
            api_key:"LFXR16423AQMLJJ2",
            light_ids:["40600628","40600629"]
          }
      ]
    },
    { name: "Cuddalore" },
    { name: "Dharmapuri" },
    { name: "Dindigul" },
    { name: "Erode" },
    { name: "Kanchipuram" },
    { name: "Kanyakumari" },
    { name: "Karur" },
    { name: "Krishnagiri" },
    { name: "Madurai" },
    { name: "Nagapattinam" },
    { name: "Namakkal" },
    { name: "Nilgiris" },
    { name: "Perambalur" },
    { name: "Pudukkottai" },
    { name: "Ramanathapuram" },
    { name: "Salem" },
    { name: "Sivaganga" },
    { name: "Thanjavur" },
    { name: "Theni" ,
      post: [
        { //ON51888_40600699_USLHEIIMIZD1D2NX
          post_no:1,
          post_name:"Post-1",
          talkback_id:"51888",
          api_key:"USLHEIIMIZD1D2NX",
          light_ids:["40600699","40600700"]
        },
        {
          post_no:2,
          post_name:"Post-2",
          talkback_id:"51888",
          api_key:"USLHEIIMIZD1D2NX",
          light_ids:["40600701","40600702"]
        }
      ]
    },
    { name: "Thoothukudi" },
    { name: "Tiruchirappalli" },
    { name: "Tirunelveli" },
    { name: "Tiruppur" },
    { name: "Tiruvallur" },
    { name: "Tiruvannamalai" },
    { name: "Tiruvarur" },
    { name: "Vellore" },
    { name: "Viluppuram" },
    { name: "Virudhunagar" }
  ];

  return (
    <div className="app">
      <Header 
        setPageVal = {setPageVal}
        pageVal = {pageVal}
      />
      {
        (pageVal === "all")?
        <Body 
          districts = {districts}
          selectDistrict = {selectDistrict}
          setSelectDistrict = {setSelectDistrict}
          setSelectPost = {setSelectPost}
          selectPost = {selectPost}
          setLightIds = {setLightIds}
          lightIds = {lightIds}
          obj = {obj}
          setObj = {setObj}
        />
        :
        <FaultyPage
          districts = {districts}
          setSelectDistrict = {setSelectDistrict}
          selectDistrict = {selectDistrict}
          setSelectPost = {setSelectPost}
          selectPost = {selectPost}
          setLightIds = {setLightIds}
          lightIds = {lightIds}
          obj = {obj}
          setObj = {setObj}
        />
      }      
    </div>
  );
}

export default App;
