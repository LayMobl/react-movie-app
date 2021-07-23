import { useEffect, useState } from "react";
import API from "../API";

const initialstate = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [state, setState] = useState(initialstate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch {
            setError(true);
        }
        setLoading(false);
    }

    //Initial render
    useEffect(() => {
        fetchMovies(1);
    }, [])

    return { state, loading, error };
}