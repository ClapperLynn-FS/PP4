import React,{useState, useEffect} from "react";
import Tracking from "../component/Tracking";


function TrackingPage() {
  const [userData, setuserData ] = useState(null);

   useEffect(() => {
    async function fetchAPI(){
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles');
        const data = await response.json();
        console.log(data);
        const [user] = data;
        console.log(user);
        
        setuserData(user);

       }
       fetchAPI();
   }, []);

  return (
    <div style={styles.container}  className="App">
      {userData &&
       <Tracking
        Name={userData.name}
        Id={userData.id}
        Latitude={userData.latitude}
        Longitude={userData.longitude}
        Altitude={userData.altitude}
        Velocity={userData.velocity}
        Visibility={userData.visibility}
       />
        }

    </div>
     );
    }
    
    export default TrackingPage;

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2%',
          height: '100vh',
          width: '250%', 
          backgroundColor: '#6699cc'
      },
      col: {
          display: 'flex',
          flexDirection: 'column'
      },
      row: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '3%'
  
  
      },
      main: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
      },
      header: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
          //justifyContent: 'space-between'
      }
    }