import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./main.css";

export default function Main() {

  const items = [
    { img: `${process.env.PUBLIC_URL}/img/php_1.jpg`, title: 'タイトル：いきなりはじめるPHP~ワクワク・ドキドキの入門教室', price: '価格：1980円', genre: 'ジャンル：PHP', comment: 'PHPの基本的なことを学ぶ教本です。体系的に学ぶというよりは実際に手を動かして学ぶタイプの本になります。まずは、PHPとはどんなものなのかを実際に体験するには適した本です。内容は初心者向けになります。' },
    { img: `${process.env.PUBLIC_URL}/img/php_2.jpg`, title: 'タイトル：気づけばプロ並みPHP 改訂版', price: '価格：2970円', genre: 'ジャンル：PHP', comment: 'タイトル：いきなりはじめるPHP~のさらに一歩進んだ内容になっています。さらに理解を深めたい方におすすめの本です・こちらも同様に実際に手を動かして理解する内容になっています。作成するサイトは、ショッピングサイトを作成する内容になっており、追加、削除、更新といったことが学べます。体系的に学ぶ内容ではないので、まずは教本通りにサイトを作成し、気になったところや理解できなかったところを個別に調べていくのがいいと思います。' },
    { img: `${process.env.PUBLIC_URL}/img/html_1.jpg`, title: 'タイトル：いちばんやさしいHTML5&CSS3の教本', price: '価格：2420円', genre: 'ジャンル：HTML', comment: 'この一冊でホームページ作成の基本的なことが学べます。ヘッダー、フッター、ナビゲーションバーの作成の仕方、段組みレイアウトの組み方、レスポンシブ対応が学べますがこれだけでは物足りないかもしれません。' },
    { img: `${process.env.PUBLIC_URL}/img/javascript_1.jpg`, title: 'タイトル：確かな力が身につくJavaScript「超」入門', price: '価格：2728円', genre: 'ジャンル：JavaScript', comment: 'JavaScriptの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/javascript_2.jpg`, title: 'タイトル：改訂新版JavaScript本格入門 ~モダンスタイルによる基礎から現場での応用まで', price: '価格：3278円', genre: 'ジャンル：JavaScript', comment: 'JavaScriptの本です。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。ここに本の感想が入ります。' },
    { img: `${process.env.PUBLIC_URL}/img/photoshop_1.jpg`, title: 'タイトル：Photoshop しっかり入門 増補改訂版', price: '価格：2178円', genre: 'ジャンル：Photoshop', comment: 'Photoshopの基本的な使い方を学習することができます。いろいろな画像編集ができるので、Photoshopでどのような操作ができるのか基本的なことが知りたい方は適していると思います。初心者がまず初めに勉強するにはうってつけの教本だと思います。内容は初心者向けなので中級者以上は物足りない内容かもしれません。' },
    { img: `${process.env.PUBLIC_URL}/img/other_1.jpg`, title: 'タイトル：Webデザイン必携。プロにまなぶ現場制作ルール84', price: '価格：3281円', genre: 'ジャンル：その他', comment: 'こちらの本はタイトルにあるように、プログラムの勉強ではなく現場制作について学ぶ本です。WEBディレクターになったばかりの方やこれからなろうとする方たちを対象にした内容になっております。WEBデザイナーやコーダーに指示する際の基本的な注意点などが書かれているのでこのような本は、一度は読んでおくべきと思います。' },
  ];

  const List = ({ img, title, price, genre, comment }) => (
    <div className="list">
      <div class="book-info">
        <img className="book-img" src={img} />
        <div class="info">
          <p>{title}</p>
          <p>{price}</p>
          <p>{genre}</p>
        </div>
      </div>
      <p class="comment">{comment}</p>
    </div>
  );

  const Itemlist = () => (
    <div>
      {items.map((item) => (
        <List img={item.img} title={item.title} price={item.price} genre={item.genre} comment={item.comment}/>
      ))}
    </div>
  );
  return (
    <div>
    <h1>List</h1>
    <Itemlist />
    </div>
  );



}
