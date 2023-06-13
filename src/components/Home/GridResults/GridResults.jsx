'use client'
import { AnimeContext } from "@/hooks/Context";
import { useContext } from "react";
import { Card } from "./Card";

export function GridResults() {
    const { anime, counter, page } = useContext(AnimeContext);
    
    return (
        <section className="my-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {anime.map((anime) => (
                <Card key={anime._id} image={anime.image} textContent={anime.synopsis} title={anime.title}  />
            ))}
             {anime.length === 0 ? '' :
            <button onClick={counter} className=" col-start-4 border text-sm w-20 h-12 p-2 border-cyan-700 rounded-md" >
            <span className="text-cyan-700">Siguiente {page} </span>
            </button>}
        </section>
    );
} 