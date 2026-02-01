import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import apiClient from "../../api/api.js";


function ArticlesWrapper() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient.get('/articles')
    .then(response => {
      setArticles(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    })
  }, []);



  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
      <div>
        <h1>Articles</h1>
        {loading ? (
            <div>Loading articles...</div>
        ): (
            <ul>
              {articles.map(article => (
                  <li key={article.id}>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    <p>{article.content.substring(0, 100)}...</p>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}

export default ArticlesWrapper;