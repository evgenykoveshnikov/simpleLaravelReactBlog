import { useState } from "react";
import apiClient from "../../api/api";
import { useNavigate } from "react-router-dom";

function ArticleForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        apiClient.post('/articles', {title: title, content: content})
            .then(response => {
                navigate(`/articles/${response.data.id}`);
            })
            .catch(error => {
                setError(error);
                setSubmitting(false);
            })
    }
    return (

        <div>
            <h1>Create Article</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Title:</p>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required disabled={submitting}/>
                </label>
                <label>
                    <p>Content:</p>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required disabled={submitting}></textarea>
                </label>
                <button>{submitting ? 'Creating...' : 'Create Article'}</button>
                {error && <p style={{ color: 'red'}}>Error: {error.message}</p>}
            </form>
        </div>
    )
}

export default ArticleForm;