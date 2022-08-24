import React from "react";

const ImgCard = (props) => {
    return(
    <section style={styles.container}>
        <div>
        <h1 style={styles.h1} >{props.title}</h1>
            <img height='500' width='1000' src={props.img} alt='image' />
        </div>
        <div>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>

       
    </section>

    )
}

export default ImgCard

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#6699cc',
        justifyContent: 'center',
        width: '25%',
        height:'100vh',
        //margin: '5%',
        alignItems: 'center',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
        border: '5px solid black',
        color: 'black',
        padding: '2rem'
        
        
    },
    profileHeader: {
        display: 'flex',
        flexDirection: 'column',
        width: '20%'
    },
    h1: {
        fontSize: 26,
        color: 'white',
    },
    h2Btn: {
        borderRadius: '50%',
        background: '#119da4ff',
        height: '50%',
        width: '50px',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        cursor: 'pointer'
    },
    myInputRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '90%',
        padding: '2%',
    },
    form: {
        backgroundColor: '#6699cc',
        justifyContent: 'center',
        border: 'solid black',
        padding: '2%',
        margin: '2%'
    }
}