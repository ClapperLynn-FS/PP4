import React,{useState, useEffect} from "react";
import UserForm from '../component/UserForm';

function Settings(){
   
    const [userData, setuserData ] = useState(null);

   useEffect(() => {
    async function fetchAPI(){
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const [user] = data.results;
        console.log(user);
           
        setuserData(user);

       }
       fetchAPI();
   }, []);



    
    return(
        <section style={styles.container}>
            <h1 style={styles.h1} >Settings</h1>
            {userData && 
                <UserForm
                    avatar={userData.picture.large}
                    fName={userData.name.first}
                    lName={userData.name.last}
                    street={userData.location.street.number}
                    city={userData.location.city}
                    state={userData.location.state}
                    zip={userData.location.postcode}
                    email={userData.email}
                    phone={userData.phone}
                    username={userData.login.username}
                    password={userData.login.pasword}
                />
            }
        </section>
    )
}

export default Settings;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width:  '200vh', 
        backgroundColor: '#87CEEB'
        
    },
    h1: {
        fontSize: 32
    }
}