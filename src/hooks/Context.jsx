'use client'
import { createContext, useState } from "react";

export const AnimeContext = createContext();

export const AnimeProvider = ({children}) => {
    const [anime, setAnime] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);

  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };



    return (
        <AnimeContext.Provider value={{
            anime,
            setAnime,
            search,
            setSearch,
            loading,
            setLoading,
            isOpen,
            openModal,
            closeModal,
            
            page,
            setError,
            error
        }}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeContext;
