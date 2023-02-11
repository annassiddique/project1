import { useState, useEffect } from "react";



const usefetch = (url) => {
    const [data, setdata] = useState(null);
    const [isloading, setisloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect((url) => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("skill issue couldn't match any bitches");
                    }
                    return res.json()
                })
                .then(data => {
                    setdata(data);
                    setisloading(false)
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message)
                    setisloading(false)

                })

        }, 1000);


    }, [url])


    return { data, isloading, error }


}


export default usefetch;










