import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import play from "../assets/play_icon.png"
import info from "../assets/info_icon.png"
import { GoDownload } from "react-icons/go"
import Continue from "../Components/SingleMovie/Continue"
import Specially from "../Components/SingleMovie/Specially"
import { FaPlus } from "react-icons/fa6"


const SingleMovie = () => {
    const [movie, setMovie] = useState([])
    const [rating, setRating] = useState([])
    const [year, setYear] = useState([])
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
                const rating = data.vote_average.toFixed(1)
                setRating(rating)
                const time = data.release_date.substring(0,4)
                setYear(time)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        } 
        fetchdata()
    }, [id])

    {loading
         &&
         <div className="text-white">Loading...</div>         
    }

    const AddToList = () => {
        const saved = JSON.parse(localStorage.getItem("saved-movie")) || {}
        if(!saved.newList) saved.newList = []
        
        saved.newList.push(movie)
        localStorage.setItem("saved-movie", JSON.stringify(saved))
        console.log("click click")
    }
    
    return(
        <div className="max-w-screen-2xl m-auto">
            <div className="h-130 bg-white relative">
                <img src={`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-black/80"></div>
                <div className="text-white absolute bottom-0 px-16">
                    <p className="text-6xl font-bold ">{movie.original_title}</p>
                    <div className="mt-4 flex gap-3 items-center">
                        <p>Drama</p>•
                        <p className="bg-white/30 backdrop-blur-2xl p-1 rounded-[2px]">{year}</p>•
                        <p>3 Seasons</p>•
                        <p>{rating}</p>•
                        <p className="bg-white/30 backdrop-blur-2xl p-1 rounded-[2px]">HD</p>
                    </div>
                    <div className="mt-6 text-white w-2/3">
                        <p className="my-4">{movie.overview}</p>
                    </div>
                    <div className="flex gap-3">
                        <Link className="p-3 px-8 text-black rounded-[6px] bg-white flex gap-2"><img src={play} className="h-6" alt="" /> Start Playing</Link>
                        <Link className="p-3 px-8 bg-white/40 backdrop-blur-md rounded-[6px] flex gap-2"><GoDownload size={20}/> Download</Link>
                        <button onClick={AddToList} className="p-4 bg-white/40 backdrop-blur-md rounded-full"><FaPlus /></button>
                    </div>
                </div>
            </div>
            <div>
                <Continue id={movie.id} />
                <Specially />
            </div>
        </div>
    )
}

export default SingleMovie