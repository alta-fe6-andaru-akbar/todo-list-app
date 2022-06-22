import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from "../pages/TodoList";
import Detail from "../pages/Detail";
import Login from "../pages/Login";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TodoList />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
