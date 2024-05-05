import { useEffect,useState } from "react";
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
}


export default Articles;