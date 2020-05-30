import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./main.css";

export default function Main() {

  const items = [
    { img: `${process.env.PUBLIC_URL}/img/1.jpg`, title: 'HTMLの本', price: '1000円', comment: 'HTMLの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/2.jpg`, title: 'JavaScriptの本', price: '2000円', comment: 'JavaScriptの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/3.jpg`, title: 'PHPの本', price: '3000円', comment: 'PHPの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/1.jpg`, title: 'HTMLの本', price: '1000円', comment: 'HTMLの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/2.jpg`, title: 'JavaScriptの本', price: '2000円', comment: 'JavaScriptの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/3.jpg`, title: 'PHPの本', price: '3000円', comment: 'PHPの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/1.jpg`, title: 'HTMLの本', price: '1000円', comment: 'HTMLの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/2.jpg`, title: 'JavaScriptの本', price: '2000円', comment: 'JavaScriptの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/3.jpg`, title: 'PHPの本', price: '3000円', comment: 'PHPの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
  ];

  const List = ({ img, title, price, comment }) => (
    <div className="list">
      <div class="book-info">
        <img className="book-img" src={img} />
        <div class="info">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
      <p class="comment">{comment}</p>
    </div>
  );

  const Itemlist = () => (
    <div>
      {items.map((item) => (
        <List img={item.img} title={item.title} price={item.price} comment={item.comment}/>
      ))}
    </div>
  );
  return (
    <div>
    <Itemlist />
    </div>
  );



}
