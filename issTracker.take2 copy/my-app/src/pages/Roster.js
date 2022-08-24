import React,{useState, useEffect} from "react";
import UserForm from "../component/UserForm";
import Header from "../component/Header";


function Roster() {
  const [persons, setpersons ] = useState([]);
  const [isLoading, setIsLoading]=useState(true);


   useEffect(() => {
    async function fetchAPI(){
         const response = await fetch('http://api.open-notify.org/astros.json');
        const data = await response.json();
        console.log(data);
        const roster=data.people;
        
        console.log(roster);
        const [person] = roster;
        console.log(person);
        setpersons([...roster]);
        console.log(data.people);
         

       }
       fetchAPI();
   }, []);

  return ( 
    <div style={styles.container}>
        <h1>People In Space</h1>
        {<ol style={styles.ul}>
             <li style={styles.li}>) {persons[0].name}({persons[0].craft})</li>
             <li style={styles.li}>) {persons[1].name}({persons[1].craft})</li>
             <li style={styles.li}>) {persons[2].name}({persons[2].craft})</li>
             <li style={styles.li}>) {persons[3].name}({persons[3].craft})</li>
             <li style={styles.li}>) {persons[4].name}({persons[4].craft})</li>
             <li style={styles.li}>) {persons[5].name}({persons[5].craft})</li>
             <li style={styles.li}>) {persons[6].name}({persons[6].craft})</li>
             <li style={styles.li}>) {persons[7].name}({persons[7].craft})</li>
             <li style={styles.li}>) {persons[8].name}({persons[8].craft})</li>
             <li style={styles.li}>) {persons[9].name}({persons[9].craft})</li>
                 
         </ol>}
    </div>   
      );
    }
    
    export default Roster;

    const styles = {
      container: {
          display: 'flex',
          flexDirection: 'column',
          //paddingLeft: '2%',
          height: '100vh',
          width: '100vw', 
          backgroundColor: 'blue',
          color: 'white',
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
      },
      li:{
          marginBottom: '1rem'
      }
    }