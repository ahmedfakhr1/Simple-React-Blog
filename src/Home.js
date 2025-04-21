import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch.js";


const Home = () => {
    
    const [name, setName] = useState('ahmed');
    const {data:blogs, isPending, isError} = useFetch('http://localhost:8000/blogs');

    





    return (
        <div className="home"> 
        <h2>homepage</h2>
        {isError && <div>Error in fetching the data</div>}
        {isPending && <div>Loading...</div>}
        {blogs&& <BlogList blogs={blogs} Title = "All Blogs"/>}
        {blogs&&<BlogList blogs={blogs.filter((blog)=>blog.author=="mario")} Title = "by Mario"/>}

        
        </div>
     );
}
 
export default Home;