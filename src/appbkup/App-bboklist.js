import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Booksample } from './BookList';

function App() {
  const Navbar = () => {
    return (
      <nav className="navbar">
      <img src={`${process.env.PUBLIC_URL}/img/top-img.jpg`} alt="list logo" />
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>List</li>
      </ul>
      </nav>
    );
  }

console.log(Booksample);

  const Booklist = () => {
    const books = [
      {
        img: 1,
        title: "HTMLの本",
        price: "1000",
        comment: "よかった"
      },
      {
        img: 2,
        title: "JavaScriptの本",
        price: "2000",
        comment: "普通"
      },
      {
        img: 3,
        title: "PHPの本",
        price: "3000",
        comment: "初心者向け"
      }
    ];

    return (
      <section>
        <Book books={books[0]} />;
        <Book books={books[1]} />;
        <Book books={books[2]} />;
      </section>
    );
  }

  const Book = (props) => {
    const { img, title, price, comment } = props.books;
    const url =`${process.env.PUBLIC_URL}/img/${img}.jpg`;

     return (
     <div className="book">
       <img src={url} alt="" />
       <div>
         <h4>{title}</h4>
         <h4>{price}</h4>
         <h4>{comment}</h4>
       </div>
     </div>
   );
  }


  const items = [
    { img: `${process.env.PUBLIC_URL}/img/1.jpg`, title: 'HTML', price: '1000', comment: 'OK' },
    { img: `${process.env.PUBLIC_URL}/img/2.jpg`, title: 'JavaScriptの本', price: '2000', comment: 'OK' },
    { img: `${process.env.PUBLIC_URL}/img/3.jpg`, title: 'PHPの本', price: '3000', comment: 'OK' },
  ];

  const Hello = ({ img, title, price, comment }) => (
    <div>
      <img src={img} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{comment}</p>
    </div>
  );

  const Itemlist = () => (
    <div>
      {items.map((item) => (
        <Hello img={item.img} title={item.title} price={item.price} comment={item.comment}/>
      ))}
    </div>
  );

  return (
    <div className="App">
    <Navbar />
    <Booklist />
    <Itemlist />
    </div>
  );
}

export default App;
