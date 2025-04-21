import { useState, useEffect } from 'react';

const useFetch = (url) =>{
    const [data, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();

        
        setTimeout(() => {
            fetch(url,{signal: abortCont.signal})
        .then (res=>
        {if(!res.ok){
            throw Error('could not fetch the data for that resource');}
            return res.json()})
        .then((data)=>{
            console.log(data);
            setBlogs(data);
            setisPending(false);
        })
        .catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setisPending(false);
                setisError(true);;
                console.log(err.message);
            }
        })
        ;
        }, 1000);
        return () => {
            abortCont.abort();
            console.log('unmounted');};
    }
    , [url]);   
    
    return {data, isPending, isError};
}

export default useFetch;
// This is a custom hook that fetches data from a given URL and returns the data, loading state, and error state.