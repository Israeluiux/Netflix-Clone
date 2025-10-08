import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const MyList = () => {
    const [active, setActive] = useState(null)
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const incomingList = await JSON.parse(localStorage.getItem("saved-movie"))
                console.log(incomingList.newList)
                setMovie(incomingList.newList)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    
    return(
        <div className="text-white pt-20 px-4 md:px-16 max-w-screen-2xl m-auto">
                <p className="text-2xl">My Lists</p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                { loading &&  <div className="text-white">Loadingg</div> }
                    {
                        movie.map(each => (
                            <div onMouseEnter={() => setActive(!active)} onMouseLeave={() => setActive(null)}  className=" h-70 bg-black rounded-[6px] cursor-pointer mt-4 relative">
                                <img src={`https://image.tmdb.org/t/p/w500`+each.poster_path} alt="" className="h-full w-full object-cover rounded-[6px]" />
                                {/* {
                                    active === card.id && <><div className="absolute bg-gradient-to-t from-black/100 via-black/30 to-black/5 inset-0"></div>
                                                    <div className="absolute bottom-2 text-white right-2 font-bold">{card.original_title}</div>
                                                    </>
                                } */}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    

}

export default MyList