
import React, {useEffect,useState} from 'react';
import Articles from  './componets/article/article'
import logo from './logo.svg';  
import './App.css';


function App() {
  const [islogin , setIslogin] =  useState(false)
  const [article , setArticle] =  useState([])

  useEffect(() => {
      
      console.log('Se ejecuta primera vez' )
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buscador de productos de Amazon
        </p>
          Prisma
      </header>

        <section className ='App-articles'>

        </section>

    </div>
  );
}

export default App;
