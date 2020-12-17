import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Container from "./Container";
import NavBar from "../components/NavBar";
import Dashboard from "../pages/Dashboard";
import Loading from "../components/Loading";
import EventDetail from "../pages/EventDetail";
import ContainerFluid from './ContainerFluid';

import config from '../config.json';

export const UserContext = React.createContext();

const initialState = {
  isLoggedin:
    localStorage.getItem("isLoggedin") === null
      ? false
      : JSON.parse(localStorage.getItem("isLoggedin")),
  token:
    localStorage.getItem("token") === null ? "" : localStorage.getItem("token"),
  username: "",
  email: "",
  post: [],
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "post": {
      return { ...state, isLoading: false, post: action.pld };
    }
    case "login": {
      localStorage.setItem("isLoggedin", true);
      return { ...state, isLoggedin: true, token: action.pld.token };
    }
    case "logout": {
      localStorage.setItem("isLoggedin", false);
      // console.log(typeof localStorage.getItem("isLoggedin"));
      return { ...state, isLoggedin: false, token: "" };
    }
    default:
      return initialState;
  }
};

function MainLayout() {
  const [user, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(config.api)
      .then((res) => {
        // setPost(res.data.events);
        // setLoading(false);
        dispatch({ type: "post", pld: res.data.events });
      })
      .catch((err) => {});
  }, []);

  return (
    <UserContext.Provider value={{ userState: user, userDispatch: dispatch }}>
      {user.isLoading && <Loading />}
      {!user.isLoading && (
        <>
          <NavBar />
          <ContainerFluid>
            <Switch>
              <Route
                path="/event-detail/:id"
                render={(props) => {
                  return <EventDetail {...props} />;
                }}
              />
              <Route
                path="/"
                render={(props) => {
                  return <Dashboard posts={user.post} {...props} />;
                }}
              />
              {/* <Dashboard posts={user.post} /> */}
            </Switch>
          </ContainerFluid>
        </>
      )}
    </UserContext.Provider>
  );
}

export default MainLayout;
