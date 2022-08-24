import React from "react";
import DashCard from "../component/DashCard";


function Dashboard() {
 
  return (
    <div style={styles.container}  className="App">
      
        <DashCard/>
    </div>
     );
    }
    
    export default Dashboard;

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2%',
          height: '100vh',
          width: '250%', 
          backgroundColor: '#6699cc',
          alignItems: 'center'
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