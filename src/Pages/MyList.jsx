import { useEffect, useState } from "react"
import { FaX } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


const MyList = () => {
    const [active, setActive] = useState(null)
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const incomingList = await JSON.parse(localStorage.getItem("saved-movie"))
                if(incomingList.newList.length === 0){
                    setEmpty(true)
                    setLoading(false)
                }
                else {
                    setMovie(incomingList.newList)
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    const RemoveList = (newId) => {
        const CurrentList = JSON.parse(localStorage.getItem("saved-movie")) || {}
        if(!CurrentList.newList) return
        CurrentList.newList = CurrentList.newList.filter(movie => movie.id !== newId )
        
        localStorage.setItem("saved-movie", JSON.stringify(CurrentList))
        console.log(`Movie with id ${newId} removed`)
    }

    
    return(
    <div className="text-white pt-20 px-4 md:px-16 max-w-screen-2xl m-auto">
        <p className="text-2xl mb   -4">My Lists({movie.length})</p>
        { loading &&  <div className="text-white">Loadingg</div> }
        { empty &&  <div className="text-white">You have no movie in your List yet</div> }
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {
                movie.map((each, index) => (
                    <div key={index} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}  className=" h-70 bg-black rounded-[6px] cursor-pointer mt-4 relative">
                        <img src={`https://image.tmdb.org/t/p/w500`+each.poster_path} alt="" className="h-full w-full object-cover rounded-[6px]" />
                        {
                            active === index && 
                            <>
                            <div className=" absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60"></div>
                            <div className="h-full w-full flex justify-center items-center top-0 absolute">
                                <button onClick={() => RemoveList(each.id)} className="cursor-pointer absolue p-4 rounded-3xl backdrop-blur-3xl bg-white/30"><FaX/></button>
                            </div>
                            </>
                        }
                    </div>
                ))
              }
            </div>
        </div>
        )
    

}

export default MyList