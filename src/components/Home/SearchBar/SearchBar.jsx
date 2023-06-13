'use client'
import useSearch from '../../../hooks/useSearch'
import "././../../../assets/components/Loader.css"

export default function SearchBar () {
  const {search, getSearch, updateSearch, loading} = useSearch()

  
  return (
    <>
     <form onSubmit={getSearch} className="mb-4">
          <div className="flex justify-center">
            <input type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Buscar anime" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-corp-300/50 flex-grow" />
            <button type="submit" className="px-4 py-2 text-white font-semibold rounded-r-md bg-corp-500 ml-2">Buscar</button>
    
          </div>
          {loading && <span className="loader"></span>}
      </form>
      
      
    </>
   
  )
}