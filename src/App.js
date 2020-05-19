import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./App.css";

function App() {

  return (
    <body>
    <div className="total-area">
    <Header />
    <Main />
    <Footer />
    </div>
    </body>
  );
}

export default App;
