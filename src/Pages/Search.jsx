import { useState, useEffect } from "react"

const Search = () => {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [active, setActive] = useState(null)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('')
                const data = await response.json()
                setMovie(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])


    return(
        <div className="pt-20 px-4 md:px-16 max-w-screen-2xl m-auto">
            <p className="text-white text-2xl">Results for Search</p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                { loading &&  <div className="text-white">Loadingg</div> }
                    {
                        movie.map(each => (
                            <div onMouseEnter={() => setActive(!active)} onMouseLeave={() => setActive(null)}  className=" h-70 bg-black rounded-[6px] cursor-pointer mt-4 relative">
                                <img src={`https://image.tmdb.org/t/p/w500`+each.poster_path} alt="" className="h-full w-full object-cover rounded-[6px]" />
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}


export default Search