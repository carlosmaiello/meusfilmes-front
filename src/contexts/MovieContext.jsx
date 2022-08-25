import React, { useState } from "react";
import api from "../services/api";

export const Context = React.createContext();

export default function MovieContext({children}) {

    const [movies, setMovies] = useState([]);

    const loadMovies = () => {
        api.get("/movies").then((response) => {
            setMovies(response.data);
        })
    }

    const createMovie = (movie) => {
        api.post("/movies", movie).then((response) => {
            loadMovies();
        })
    }

    return (
        <Context.Provider value={{ movies, loadMovies, createMovie }}>
            {children}
        </Context.Provider>
    );

}