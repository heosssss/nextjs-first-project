import { Suspense } from "react";
import MoviesInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";
import { getMovie } from "../../../../component/movie-info";

interface IParams{
    params:{id : string}
}

export async function generateMetadata({params:{id}} : IParams){
    const movie = await getMovie(id);
    return {
        title : movie.title
    }
}

export default async function MoviesDetail({params:{id}} : IParams) {
    return <div> 
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MoviesInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie video</h1>}>
            <MovieVideos id={id} />
        </Suspense>
        </div>;
}