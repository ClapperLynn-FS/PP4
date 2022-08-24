import React from "react";

const Tracking = (props) => {
    return(
        <section>
            <div style={styles.container}>
                <div>
                    {/* <img width='450' height='650' src={props.image} alt={props.title} /> */}
                </div>
                <div style={styles.dataContainer}>
                    <h2 style={styles.banner}>{props.Name} Details </h2>
                    <div >
                        <h1 style={styles.entry}>Title: {props.Name}</h1>
                        <h1 style={styles.entry}>Station ID: {props.Id}</h1>
                        <div >
                            <h4 style={styles.entry}>Latitude: {props.Latitude}</h4>
                            <h4 style={styles.entry}>Longitude: {props.Longitude}</h4>
                            <h4 style={styles.entry}>Altitude: {props.Altitude}</h4>
                            <h4 style={styles.entry}>Velocity : {props.Velocity}</h4>
                            <h4 style={styles.entry}>Visibilty: {props.Visibility}</h4>
                            
                        </div>
                    </div>
                </div>
            </div>
            
                
            
            
            
        </section>
    )
}
export default Tracking

const styles= {
    container:{
        marginTop: '5rem',
        marginLeft: '5rem',
        display: 'flex',
        flexDirection: 'row',
       
    },
    entry: {
        display: 'flex',
        flexDirection: 'row',
        border: '2px solid black',
        padding: '1rem',
        backgroundColor: '#6699cc',
        width: '30rem', 
        marginLeft: '1rem'
     
    },
    dataContainer:{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black',
        backgroundColor: 'black',
        width: '35.5%',
        margin: '2rem',
        height: '50%'
    },
    banner: {
        color:'white',
        backgroundColor: 'black',
        padding: '1rem'
    }
}