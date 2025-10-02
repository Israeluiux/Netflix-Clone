import { useEffect, useState } from "react"
import cards_data from "../../assets/cards/Cards_data"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Popular = () => {
    const [active, setActive] = useState(null)
    const [movie, setMovie] = useState([])
    const [index, setIndex] = useState(0)
    const totalCard = 4
    const cardWidth = 280
    const gap = 16
    const moveBy = (cardWidth + gap) * totalCard
    const maxIndex = Math.ceil(movie.length / totalCard) - 1
    const Bearer = import.meta.env.VITE_BEARER
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, {
                      headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${Bearer}`
                    }
                })
                const data = await response.json()
                setMovie(data.results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])


    const handlePrev = () => {
        if(index > 0) setIndex(index - 1)
    }

    const handleNext = () => {
        if(index < maxIndex) setIndex(index + 1)
    }

    return(
        <section className="mt-6">
            <div className="font-bold text-xl text-white">Popular on Netflix</div>
            <div className="flex gap-4 relative items-center w-full group">
                <button onClick={handlePrev} className="absolute z-100 bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -left-4"><FaCaretLeft size={30} /></button>
                <div className="flex gap-4 transition-transform duration-500" style={{transform: `translateX(-${index * moveBy}px)`}}>
                    {
                        movie.map(card => (
                            <div key={card.id} onClick={() => navigate(`/${card.id}`)} onMouseEnter={() => setActive(card.id)} onMouseLeave={() => setActive(null)} className="flex-shrink-0 w-70 h-40 bg-black rounded-[6px] mt-4 overflow-hidden cursor-pointer relative">
                                <img src={`https://image.tmdb.org/t/p/original`+card.poster_path} alt="" className="h-full w-full object-cover rounded-[6px]" />
                                {
                                    active === card.id && <><div className="absolute bg-gradient-to-t from-black/100 via-black/30 to-black/5 inset-0"></div>
                                                    <div className="absolute bottom-2 text-white right-2 font-bold">{card.original_title}</div>
                                                    </>
                                }
                            </div>
                        ))
                    }
                    </div>
                <button onClick={handleNext} className="absolute bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -right-12"><FaCaretRight size={30} /></button>
            </div>
        </section>
    )
}

export default Popular