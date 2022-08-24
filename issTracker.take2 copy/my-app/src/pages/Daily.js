import React,{useState, useEffect} from "react";
import ImgCard from "../component/ImgCard";


function Daily() {
  const [userData, setuserData ] = useState(null);

   useEffect(() => {
    async function fetchAPI(){
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=NAroJgdWAkCCvTbCZdKyjYqaJ2EHLTNQFy02MUUl')
        const data =  await response.json();
        console.log(data);
        //const [user] = data;
        //console.log(user);
        
        setuserData(data);


       }
       fetchAPI();
   }, []);

  return (
    <div style={styles.container}  className="App">
      {userData && 
      <ImgCard
        img={userData.url}
        title={userData.title}
        description={userData.explanation}
        date={userData.date}
      />
      }
       
        
       
        

    </div>
     );
}
    
    export default Daily;

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2%',
          height: '150vh',
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