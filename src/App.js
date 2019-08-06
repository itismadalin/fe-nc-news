import React from 'react';
import './App.css';
import Header from './components/Header'
import { Router } from '@reach/router';
// import Homepage from './components/Homepage/Homepage';
import ArticleListPage from './components/ArticleListPage/ArticleListPage';
import SingleArticlePage from './components/SingleArticlePage/SingleArticlePage';

function App() {
  return (
    <div >
      <Header />
      <Router>
        {/* <Homepage path="/" /> */}
        <ArticleListPage path="/" />
        <SingleArticlePage path='/articles/:id' />
      </Router>
    </div>
  );
}

export default App;
