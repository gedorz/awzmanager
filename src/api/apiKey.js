
import axios from "axios"
import { useEffect, useState } from "react"

const apiKey = ''
const apiTodos = 'todos'
const endPointArticulos= 'https://jsonplaceholder.typicode.com'
const sercretKey = ''

export function getDataArticles() {
    const apiUrl = endPointArticulos + '/' + apiTodos;
    const [lista, setLista] = useState([]);

    useEffect(() =>{
            axios
            .get(apiUrl)
            .then((response) => {
                setLista(response.data);
            })
            .catch((error) => {
                console.log(error);
                setLista([]);;
            });
        },[]);

    return lista;
};
