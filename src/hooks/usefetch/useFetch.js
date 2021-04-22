import { useState, useEffect } from 'react';


const useFetch = (uri) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // initially it should be true ...
    const [error, setError] = useState("");

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
        .then(resp => resp.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, []);
    
    return { data, loading, error};
}

export default useFetch;
