import { useState, useEffect } from "react";
import Movielist from "./movielist";
import usefetch from "./usefetch";

const Home = () => {



    const { data: movies, isloading, error } = usefetch("http://localhost:8000/movies" );


    return (
        <div className="homepage">
            {error && <div> {error} </div>}
            {isloading && <div>Loading....</div>}
            {movies && <Movielist movies={movies} title="My poisons :" />}
        </div>
    );
}



export default Home;