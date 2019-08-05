import React from 'react';
// import { Router } from "@reach/router";
import './App.css';
import Header from './components/Header'
import ArticleListPage from './components/ArticleListPage/ArticleListPage';

function App() {
  return (
    <div >
      <Header />
      <ArticleListPage />
      {/* <Router>
        <Homepage path="/" />
        <Topics path="/topics" />
        <Articles path="/articles" />
        <Users path="/users" />
        <Username path="/users/:username" />
      </Router> */}
    </div>
  );
}

export default App;
