import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import ArticleListPage from "./components/ArticleListPage/ArticleListPage";
import SingleArticlePage from "./components/ArticleListPage/SingleArticlePage";
import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticleListPage path="/" />
        <ArticleListPage path="/articles" />
        <ArticleListPage path="/topics/:topic" />
        <SingleArticlePage path="/articles/:id" />
        <ErrorDisplay default status={404} msg={"Route not found"} />
      </Router>
    </div>
  );
}

export default App;
