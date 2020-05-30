import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./App.css";

const App = () => (
  <BrowserRouter>
  <div class="container text-center mt5">
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/list" component={List} />
  </div>
  </BrowserRouter>
)

const Home = () => {
  return (
    <body>
    <div className="total-area">
    <Header />
    <h1>Homeのページ</h1>
    <h2>ここにHomeのページ内容を記載します。</h2>
    <Footer />
    </div>
    </body>
  );
}

const About = () => {
  return (
    <body>
    <div className="total-area">
    <Header />
    <h1>aboutのページ</h1>
    <h2>ここにaboutのページ内容を記載します。</h2>
    <Footer />
    </div>
    </body>
  );
}

const List = () => {
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
