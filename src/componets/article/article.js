import useArticlesGet from './hooks/useArticlesGet';

const Articles = () => {
  const {articles}= useArticlesGet();

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