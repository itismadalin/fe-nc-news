import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { Router } from '@reach/router';
// import Homepage from './components/Homepage/Homepage';
import ArticleListPage from './components/ArticleListPage/ArticleListPage';
import SingleArticlePage from './components/SingleArticlePage/SingleArticlePage';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';

function App() {
  return (
    <div >
      <Header />
      <Router>
        {/* <Homepage path="/" /> */}
        <ArticleListPage path="/" />
        <SingleArticlePage path='/articles/:id' />
        <ErrorDisplay default status={404} msg={'Route not found'} />
      </Router>
    </div>
  );
}

export default App;
