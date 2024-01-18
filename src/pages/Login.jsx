import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { login } from "../redux/Authentication/action";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { LOGIN_SUCCESS } from "../redux/actionTypes";


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(login(email, password)).then(res => {
      if (res.length > 0) {
        dispatch({ type: LOGIN_SUCCESS, payload: res[0] });
        localStorage.setItem("userDetails", JSON.stringify(res[0]))
        navigate(location.state || "/", { replace: true })
      } else {
        alert("Incorrect Credentials");
      }
    });
  };

//  if(isAuth){
//   return <Navigate to="/"/>
//  }
  return (
    
      <div className={`w-full ${isAuth ? 'hidden' : ''}`}>
  <div className="box mx-auto shadow-md p-6 rounded-lg mt-8">
    <h1 className="text-3xl text-red-500 mb-6">Login</h1>
    <form onSubmit={handleSubmit} className="formData flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter email"
        ref={emailRef}
        required
        className="p-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        placeholder="Enter password"
        ref={passwordRef}
        required
        className="p-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-purple-300 text-white p-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Login
      </button>
      <p className="text-sm">
        Don't have an account{' '}
        <Link to="/signup" className="text-red-500">
          Register
        </Link>
      </p>
    </form>
  </div>
</div>
    
  );
}
   // Css Code 
// const DIV = styled.div`
//  width: 100%;
//     .box{
//       width: 400px;
//       margin: auto;
//       box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
//       padding: 20px;
//       border-radius: 10px;
//       margin-top: 50px;
//     }
//     .formData{
//       display: flex;
//       flex-direction:column;
//       gap: 20px;
//     }
//     input{
//       padding: 5px;
//     }
//     button{
//       padding: 5px;
//       border-radius: 10px;
//       background-color:  #47bd47;;
//       color: aliceblue;
//       font-size: 20px;
//     }
//     h1 {
//       font-size: 30px;
//       margin-bottom:20px;
//       color:red;
//     }
//     input {
//        padding: 8px;
//        border-radius: 5px;
//        border: 1px solid grey;
//     }
// `

export default Login