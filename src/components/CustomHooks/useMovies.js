import { useState } from 'react'



const useMovies = () => {               //Recibo un titulo de pelicula


    //El estado    //Funcion que estado
    const [stateMovie, setStateMovie] = useState({})

    // useEffect(() => {
    //     axios.get(`http://www.omdbapi.com/?apikey=e2c683b0&t=${title}`)
    //         //axios.get(`http://www.omdbapi.com/?apikey=e2c683b0&t=Toy+Story`)
    //         .then((result) => setStateMovie(result.data));
    // }, [title])

    function buscar(title) {
        fetch(`http://www.omdbapi.com/?apikey=e2c683b0&t=${title}`, { method: 'get' })
            .then(response => response.json())
            .then(data => setStateMovie({ data }));
        console.log(stateMovie)
        return stateMovie
    }

    return {
        buscar
        //,stateMovie
    }  //  Devolvemos en stateCouse lo que es el result de la consulta a la api

}

export default useMovies;