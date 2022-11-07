import React from "react";
import { Link } from 'react-router-dom';

const ProfDropdown = ({ handleLogout }) => {

    return (
        <div className="dropdown">
            <img src={window.user_prof} className='prof-icon' />
            <div className="dropdown-content">
                <Link to='/' className='logout-link' onClick={(e) => handleLogout(e)}>
                    Logout
                </Link>
            </div>
        </div>
    )
};

export default ProfDropdown;