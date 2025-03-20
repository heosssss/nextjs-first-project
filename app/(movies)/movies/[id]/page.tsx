import { Suspense } from "react";
import MoviesInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";


export default async function MoviesDetail({params}) {
    const { id } = await params;

    return <div> 
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MoviesInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie video</h1>}>
            <MovieVideos id={id} />
        </Suspense>
        </div>;
}