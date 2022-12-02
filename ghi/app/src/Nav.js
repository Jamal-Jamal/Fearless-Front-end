import React from 'react';
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" to="">Conference GO!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                  <NavLink className="nav-link" aria-current="page" to="/" >Home </NavLink>
                  <NavLink className="nav-link" aria-current="page" to="/locations/new">New location</NavLink>
                  <NavLink className="nav-link" aria-current="page" to="/conferences/new">New conference</NavLink>
                  <NavLink className="nav-link" aria-current="page" to="/presentations/new">New presentations</NavLink>
                  <NavLink className="nav-link" aria-current="page" to="/attendees/new">New Attendee</NavLink>
                  <NavLink className="nav-link" aria-current="page" to="/attendees">Attendees</NavLink>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                <a className="btn btn-primary" href="attend-conference.html">Attend!</a>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  export default Nav;
