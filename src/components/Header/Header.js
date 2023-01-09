import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="pe-5">
              <nav className="navbar navbar-light bg-dark pt-2 nav-css">
                     <div className="container-fluid">
                    <a className="navbar-brand text-light ms-5"><i class="fa-solid fa-house"></i> Home</a>
                            <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                            <a className=" btn navbar-brand text-light ms-5"><i class="fa-solid fa-user"></i> Log in</a>
                            <a className=" btn btn-warning ms-1">Menu</a>
                            </form>
                         
                        </div>
                        </nav>
            <header className="header-top">
            <h1> Wellcome to Great Leaders of the World </h1>
            <p>Make top 5 Great leader Biography with full history of Every Leader </p>
            <h3> Total Butget : 50 Milion</h3>
            </header>
        </div>
    );
};

export default Header;