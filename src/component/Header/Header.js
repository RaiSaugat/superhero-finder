import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
        return (
            <div>
                <NavLink className="home" to="/">
                Home
                </NavLink>
                <NavLink className="add" to="/add">
                Add
                </NavLink>
            </div>
        )
}
export default Header;