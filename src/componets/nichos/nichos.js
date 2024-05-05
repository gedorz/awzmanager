import React, { useState, useEffect } from "react";
import axios from "axios";

const Nichos = () => {
  const [nichos, setNichos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setNichos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de nichos</h1>
      <ul>
        {nichos.length >0 ? (
            nichos.map((nicho) => (
                    <li key={nicho.id}>{nicho.title}</li>
                ))
            ):(
                <i>No existen nichos</i>
            )
        }
      </ul>
    </div>
  );
};

export default Nichos;