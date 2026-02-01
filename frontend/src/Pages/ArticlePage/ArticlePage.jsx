import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../api/api.js";
import CommentForm from "../../components/CommentForm/CommentForm.jsx";


function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = () => {
    api.get(`/articles/${id}`)
    .then(response => {
      setArticle(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const handleCommentAdded = () => {
    fetchArticle();
  }

  return (
      <div>
        <Link to="/">Back to Articles</Link>
        {loading ? (
            <div>Загрузка...</div>
        ): (
            <div>
              <h1>{article.title}</h1>
              <p>{article.content}</p>

              <h2>Comments</h2>
              {article.comments && article.comments.length > 0 ? (
                  <ul>
                    {article.comments.map((comment) => (
                        <li key={comment.id}>
                          <strong>{comment.author_name}</strong>: {comment.content}
                        </li>
                    ))}
                  </ul>
              ) : (<p>No comments yet.</p>)}
              <CommentForm articleId={article.id} onCommentAdded={handleCommentAdded} />
            </div>
        )}

      </div>
  );
}

export default ArticlePage;