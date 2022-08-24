import React from "react";
import image from "../images/issHome.jpeg"

const DashCard = (props) => {
    return(
    <section style={styles.container}>
        <img border= '25px solid black' height='500' width='800' src={image} alt='image' />
        <div style={styles.imageWindow}>
            
            
            <p>
                Welcome to my tracking site for the Internation Space Station. You can see it's current location, who's currently in space, and see nasa's photo of the day.
                I hope you enjoy it.
            </p>
        </div>
    </section>

    )
}

export default DashCard

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#6699cc',
        justifyContent: 'center',
        width: '40vw',
        margin: '1%',
        alignItems: 'center',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
        border: '5px solid black',
        color: 'black',
    },
    h1: {
        fontSize: 50,
        color: 'black',
        textAlign:'center'
    },
    imageWindow:{
        backgroundColor:'black',
        width: '100%',
        paddingBottom:'5%',
        color: 'white'
    }
}