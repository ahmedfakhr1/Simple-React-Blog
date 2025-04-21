import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('luigi');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            // Redirect to home page after adding the blogH
            navigate('/');
        })
    }
    return (
        <div>
        <h1>Create Blog</h1>
        <form className="createblog" onSubmit={handleSubmit}>
            <label> Title</label>
            <input 
            type="text"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            required/>
            <label>Author</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
                <option value="ahmed">Ahmed</option>
                <option value="sara">Sara</option>
                <option value="john">John</option>
                <option value="doe">Doe</option>
            </select>
            <label>Article Body</label>
            <textarea 
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            <button>Add Blog</button>
        </form>
        </div>
    );
}
export default CreateBlog;