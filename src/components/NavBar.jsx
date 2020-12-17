import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { UserContext } from "../Layout/MainLayout";
const NavBar = () => {
  const { userState, userDispatch } = useContext(UserContext);
  let { isLoggedin } = userState;
  return (
    <nav className="navbar shadow-sm">
      <Link to="/">
      <b className="navbar-brand " style={{color:'var(--c_primary)'}}>
        Upcoming Events
      </b>
      </Link>
      <div className="ml-auto">
        {isLoggedin && (
          <>
            <button className="btn btn-outline-danger rounded-lg ml-1">
              Create Events
            </button>
            <button className="btn btn-danger  ml-1" onClick={()=>userDispatch({type:'logout',pld:"hello"})}>Logout</button>
          </>
        )}
        {!isLoggedin && <button className="btn btn-danger  ml-1" onClick={()=>userDispatch({type:'login',pld:{token:''}})}>Login</button>}
      </div>
    </nav>
  );
};

export default NavBar;
