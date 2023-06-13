import { AnimeProvider } from '@/hooks/Context'
import  SearchBar  from '../components/Home/SearchBar/SearchBar'
import { GridResults } from '@/components/Home/GridResults/GridResults'


export default function Home() {
  return (
    <AnimeProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Buscador de Anime</h1>
        <SearchBar />
        <GridResults/>
      </div>
    </main>
    </AnimeProvider>
  )
}
