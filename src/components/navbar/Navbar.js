import React from 'react';
import './Navbar.css';
import avatar from '../../assets/avatar.svg';

const Navbar = ({ sidebar, openSidebar}) =>{
    const [option,setOption] = React.useState(1);

    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={()=>openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a className={option === 1 ? "active_link" : ""} href="#"  onClick={()=>setOption(1)}>Project</a>
                <a className={option === 2 ? "active_link" : ""} href="#" onClick={()=>setOption(2)}>Team</a>
                <a className={option === 3 ? "active_link" : ""} href="#" onClick={()=>setOption(3)}>Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </a>
                    <a href="#!">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;