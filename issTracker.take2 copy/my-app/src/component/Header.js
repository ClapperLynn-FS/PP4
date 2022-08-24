import React from "react"
import { Link } from "react-router-dom";
import avatar from '../images/csm.png'

const Header = props => {
    return(
        <header style={styles.MyHeader}>
            <div style={styles.left}>
                <h1> ISS Tracking</h1>
            </div>
            <div>
            
            </div>
            <div style={styles.avatar}>
                <Link to="/settings" ><img style={styles.avatar} src={avatar} alt= 'avatar icon'/></Link>
                
                <div>
                <Link to="/" style={styles.link} >Log Off</Link>
                </div>
            </div>

        </header>
    )
}
export default Header;

const styles= {
    MyHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1%',
        backgroundColor: 'black',
        color: '#6699cc',
        Shadow:'1px 6px 1px 1px rgba(0,0,255,.1)'
    },
    avatar:{
        display: 'flex',
        flexDirection: 'row',
        marginRight: '25px'
    },
    avatarItems: {
        marginRight: '3%',
        
    },
    link: {
        marginRight: '3%',
        color: 'white'
    }

}