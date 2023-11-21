import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Users from "./containers/Users";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </>
    );
  }
}

export default App;
