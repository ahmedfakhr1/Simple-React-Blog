import { useParams ,useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const SingleBlog = () => {
    const{id} = useParams();
    const{data, isPending, isError} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            navigate('/');
        })
    }
  return (
    <div className="single-blog">
      {isError && <div>Error in fetching the data</div>}
      {isPending && <div>Loading...</div>}
      {data && <h1> {data.title}</h1>}
      {data && <h2> {data.author}</h2>}
      <article>{data && 
        <p>{data.body}</p>
        }</article>
      <button onClick={handleDelete}>Delete Article</button>
    </div>
  );
}   
export default SingleBlog;