import {useState} from "react";
import apiClient from "../../api/api.js";


function CommentForm({articleId, onCommentAdded}) {
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);

    apiClient.post(`/articles/${articleId}/comments`, { author_name: authorName, content: content })
    .then(response => {
      setAuthorName('');
      setContent('');
      setSubmitted(false);
      onCommentAdded();
    })
    .catch(error => {
      setError(error);
      setSubmitted(false);
    });

  }
  return (
      <form onSubmit={handleSubmit}>
        <label>
          <p>Your Name:</p>
          <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required disabled={submitted}/>
        </label>
        <label>
          <p>Comment:</p>
          <textarea id="commentContent" value={content} onChange={(e) => setContent(e.target.value)} required disabled={submitted}></textarea>
        </label>
        <button type='submit' disabled={submitted}>
          {submitted ? 'Submitting' : 'Add Comment'}
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </form>
  );
}

export default CommentForm;