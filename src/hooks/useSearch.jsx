import { useEffect, useContext } from 'react';
import { AnimeContext } from './Context.jsx';
import getAnime from "@/api/request";

function useSearch () {

    const {anime,page, setAnime,search,setSearch,setLoading, loading, setPage} = useContext(AnimeContext)

    const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
            page: page,
            size: '16',
            search: search,
            sortBy: 'ranking',
            sortOrder: 'asc'
        },
        headers: {
            'X-RapidAPI-Key': '14998cf746msh7cabb0a48445dccp166686jsnfc294bb78770',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    const counter = () => {
        setPage(page + 1);
        fetchAnime();
      };

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const fetchAnime = async () => {
        setLoading(true)
        try {
            const response = await getAnime(options)
            setLoading(false)
            const { data } = await response
            console.log(data)
            setAnime(data)
        } catch (error) {
            console.log(error)

        }
    }

    const getSearch = (e) => {
        e.preventDefault()
        fetchAnime()
        setSearch('')
    }

    useEffect(() => {
    }, [anime, page])

    return {
        anime,
        search,
        setSearch,
        getSearch, 
        updateSearch,
        loading
}
}
export default useSearch;

