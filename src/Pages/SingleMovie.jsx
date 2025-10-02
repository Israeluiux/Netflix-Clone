import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleMovie = () => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const Bearer = import.meta.env.VITE_BEARER

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                        headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${Bearer}`
                    }
                })
                const data = await response.json()
                setMovie(data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        } 
        fetchdata()
    }, [])

    {loading
         &&
         <div className="text-white">Loading...</div>
         {console.log("correct")}
         
     }
    
    return(
        <div className="max-w-screen-2xl m-auto">
            <div className="h-130 bg-white relative">
                <img src={`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-black/80"></div>
                <div className="text-white absolute bottom-2 px-16">
                    <p className="text-4xl font-bold ">{movie.original_title}</p>
                    {/* {movie.genres.map((each) => (
                    ))} */}
                        {/* <p className="">{movie.genres[0].name}</p> */}
                </div>
            </div>
        </div>
    )
}

export default SingleMovie