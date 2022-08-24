import React from "react";

const UserForm = (props) => {
    return(
    <section style={styles.container}>
        <div>
            
            <img src={props.avatar} alt='avatar' />
            <h1 style={styles.h1} >{props.username}</h1>
        </div>

        <form onSubmit={props.editMe} style={styles.form}>
            <p style={styles.myInputRow}>
                <div style={styles.inputColumn}>
                    <label for='fName' >First Name</label>
                    <input type='text' style={styles.input} value={props.fName} placeholder='First Name' />
                </div>
                <div style={styles.inputColumn}>
                    <label for='lName' >Last Name</label>
                    <input type='text' style={styles.input} value={props.lName} placeholder='last Name' />
                </div>
            </p >
            <p style={styles.myInputRow} >
            <div style={styles.inputColumn}>
                <label for='street' > Street Address</label>
                <input type='text' style={styles.input} value={props.street} placeholder='Address' />
            </div>
            <div style={styles.inputColumn}>
                <label for='city' >City</label>
                <input type='text' style={styles.input} value={props.city} placeholder='City' />
            </div>
            </p>
            <p style={styles.myInputRow} >
                <div style={styles.inputColumn}>
                    <label for='state' >State</label>
                    <input type='text' style={styles.input} value={props.state} placeholder='State' />
                </div>
                <div style={styles.inputColumn}>
                    <label for='zip' >ZipCode</label>
                    <input type='text' style={styles.input} value={props.zip} placeholder='Zipcode' />
                </div>
                
                
            </p>
            <p style={styles.myInputRow} >
                <div style={styles.inputColumn}>
                <label for='email' >Email</label>
                    <input type='text' style={styles.input} value={props.email} placeholder='Email' />
                </div>
                <div style={styles.inputColumn}>
                <label for='phone' >Phone</label>
                    <input type='text' style={styles.input} value={props.phone} placeholder='Phone' />
                </div>
                
                
                
            </p>
            
            <p style={styles.myInputRow} >
            <div style={styles.inputColumn}>
                <label for='username' >Username</label>
                <input type='text' style={styles.input} value={props.username} placeholder='User Name' />
            </div>
            <div style={styles.inputColumn}>
                <label for='password' >Password</label>
                <input type='text' style={styles.input} value={props.password} placeholder='Password' />
            </div>
                
                
            </p>

        </form>
    </section>

    )
}

export default UserForm

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#6699cc',
        justifyContent: 'center',
        width: '75vh',
        margin: '1%',
        alignItems: 'center',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
        border: '5px solid black',
        color: 'black',
        
        
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