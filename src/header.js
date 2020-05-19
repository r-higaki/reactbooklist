import React, { Component } from 'react';
import "./header.css";

export default function Header() {
    return (
      <header>
        <p>本を紹介するページ</p>
        <div className="header-img">
          <img src={`${process.env.PUBLIC_URL}/img/top-img.jpg`} alt="list logo" />
        </div>
        <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>List</li>
        </ul>
        </div>
      </header>
    );
  }
