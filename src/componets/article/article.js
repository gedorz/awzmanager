import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de artículos</h1>
      <ul>
        {articles.length >  0 ? (
          articles.map((article) => (<li key={article.id}>{article.title}</li>))
          ) :(
            <i>No existen artículos  </i>  
          )
        }
      </ul>
    </div>
  );
};


export default Articles 