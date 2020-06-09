import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./header.css";

export default function Header() {
    return (

      <header>
      <div className="navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/list"><li>List</li></Link>
      </ul>
      </div>
        <p>本を紹介するページ</p>
        <div className="header-img">
          <img src={`${process.env.PUBLIC_URL}/img/top-img.jpg`} alt="list logo" />
        </div>
      </header>
    );
  }
