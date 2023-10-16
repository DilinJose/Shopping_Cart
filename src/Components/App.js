import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signin from "./Signin";
import Favorite from "./Favorite";
import Cart from "./Cart";


function App(props) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.stateReducers);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
