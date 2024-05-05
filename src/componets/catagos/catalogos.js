import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setCatalogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de catalogos</h1>
      <ul>
        {catalogs.length > 0 ? (
           catalogs.map((catalog) => (<li key={catalog.id}>{catalog.title}</li>))
          ) : (
            <i>Sin Catalogos</i>
          )
        }
      </ul>
    </div>
  );
};

export default Catalogs;