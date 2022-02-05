import axios from "axios";
import React from "react";

export const jwtAxios=()=>{
 const jwtAxios = axios.create();
 
 //Add a response interceptor
  jwtAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      console.log(originalRequest);
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      await jwtAxios
        .post("http://localhost:5000/auth/refreshtoken", {
          token: refreshToken,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data);
          axios.defaults.headers.common["Authorization"] =
            localStorage.getItem("access_token");
          return jwtAxios(originalRequest);
        });
      return Promise.reject(error);
    }
  )
  return jwtAxios
 
}

/* import jwt_decode from "jwt-decode"; */
/*  const refreshTokens = () => {
  try {
    axios
      .post("http://localhost:5000/auth/refreshtoken", {
        token: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
      });
      return res.data
  } catch (err) {
    console.log(err);
  }
}; 

const jwtAxios=axios.create()

jwtAxios.interceptors.request.use(async(config)=>{
  let currentDate =new Date();
  const token=localStorage.getItem('access_token')
  const decodedToken=jwt_decode(token);
  if ( decodedToken.exp*1000<currentDate.getTime() ){
    const data =await refreshTokens()
    config.headers["Authorization"]= data;
  }
  return config
},(err)=>{
  return Promise.reject(err)
}) */




