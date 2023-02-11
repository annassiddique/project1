const Movielist = (props) => {
    const movies = props.movies;
    const title = props.title;



    return (
        <div className="movielist">
            <h2>{title}</h2>
            {movies.map((movies) => (

                <div className="preview" key={movies.id} >
                    <h2>{movies.Movie}</h2>
                    <p>Directed by {movies.Director}</p>


                </div>

            ))}
        </div>
    );
}

export default Movielist;