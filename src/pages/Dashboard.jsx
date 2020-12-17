import React, { useState, useEffect ,useContext} from "react";
import Card from "../components/Card";
// import { UserContext } from "../Layout/MainLayout";
// const { userState, userDispatch } = useContext(UserContext);

const Dashboard = ({posts}) => {
  return (
    <div className="row">
      <div className="col-3">
          <div className="card">
            <ul style={{listStyle:'none',}}>
              <li className='nav-link' style={{fontSize:25}}>All Events</li>
              <li className='nav-link' style={{fontSize:25}}>Seminar</li>
              <li className='nav-link' style={{fontSize:25}}>Workshop</li>
              <li className='nav-link' style={{fontSize:25}}>Entertainment</li>
            </ul>
          </div>
      </div>
      <div className="col-8">
      <div className="row justify-content-center no-gutters">
        {posts.map((post) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4"
            key={post["_id"]}
          >
            <Card {...post} />
          </div>
        ))}
    </div>
      </div>
    </div>
  );
};

export default Dashboard;
