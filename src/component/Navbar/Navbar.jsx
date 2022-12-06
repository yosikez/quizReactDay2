import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const Active = {
        color: 'darkblue',
        textDecoration: 'none',
        fontSize: '18px',
        borderRadius: '15px',
        backgroundColor: 'white',
        padding: '5px',
    }
    const NonActive = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    }
    return (
        <nav
            style={{
                backgroundColor: '#349DE2',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                height: '40px'
            }}
        >
            <NavLink  to='/' style={({isActive}) => (isActive ? Active : NonActive)}>
                Home
            </NavLink>
            <NavLink  to='/profile' style={({isActive}) => (isActive ? Active : NonActive)}>
                Profile
            </NavLink>
        </nav>
    );
}

export default NavBar;