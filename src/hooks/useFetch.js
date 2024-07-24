import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async ()=>{
        console.log('fetching data', url)
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
    }

    useEffect(()=>{
        fetchData()

    },[url])

    return {data}

}

export default useFetch;