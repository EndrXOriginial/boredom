import React from "react";
import {  NavLink  } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="nav-header">
                <NavLink to={'/'}>
                    <h1 className="title-page">Boredom</h1>
                </NavLink>
            </nav>
        </div>
    )
}