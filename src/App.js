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
    <div className="main">
    <h1>Home</h1>
    <h2>本サイトについて</h2>
    <p>このサイトを作成した目的は私が今まで勉強してきた本を紹介し、初学者の方たちの参考になればと思い立ち上げました。</p>
    <p>また、もう一つの目的として、本サイトはReactで作成しています。Reactの勉強を兼ねるためにも、本サイトを作成しました。</p>
    <p>本サイトはシンプルなつくりになっていますがReactを使用することでメリットがあります。</p>
    <p>１．ヘッダー、フッター部は関数のため修正が入っても楽であること</p>
    <p>２．Listのページで情報を追加し、更新することがも楽であること</p>
    <p>本サイトのようなシンプルなつくりでもこのような恩恵を受けることができます。</p>
    </div>
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
    <div className="main">
    <h1>About</h1>
    <h2>自己紹介</h2>
    <p>私はWEB制作は木経験でしたが、オンラインスクールと独学を経てIT業界に足を踏み入れました。</p>
    <h2>経歴</h2>
    <ul className="history">
      <li>理系大学院卒業</li>
      <li>半導体メーカー勤務</li>
      <li>オンライン学習及び教本で勉強</li>
      <li>現在WEB関連会社勤務</li>
    </ul>
    </div>
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
