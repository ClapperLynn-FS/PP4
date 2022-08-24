import React from "react";

import { Link } from "react-router-dom";

const Nav= () => {
    return(
        <nav style={styles.nav} >
            <Link style={styles.link} to="/dashboard" >Dashboard</Link>
            <Link style={styles.link} to="/trackingPage" >Tracking</Link>
            <Link style={styles.link} to="/roster" >Roster</Link>
            <Link style={styles.link} to="/Daily" >Daily Photo</Link>
            <Link style={styles.link} to="/settings" >Settings</Link>
            
        </nav>
    );
}

export default Nav

const styles={
    nav: {
        display: 'flex',
        flexDirection: 'Column',
        position: 'relative',
        alignSelf: 'stretch',
        fontSize: '1.5rem',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '2rem'
    },
    link: {
        color: '#6699cc',
        marginBottom: '4%'
    }
}