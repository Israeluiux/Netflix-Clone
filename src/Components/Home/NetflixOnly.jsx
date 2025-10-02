import { useState } from "react"
import cards_data from "../../assets/cards/Cards_data"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"

const NetflixOnly = () => {
    const [active, setActive] = useState(null)
    const [index, setIndex] = useState(0)
    const totalCard = 4
    const cardWidth = 280
    const gap = 16
    const moveBy = (cardWidth + gap) * totalCard
    const maxIndex = Math.ceil(cards_data.length / totalCard) - 1
    const navigate = useNavigate()


    const handlePrev = () => {
        if(index > 0) setIndex(index - 1)
    }

    const handleNext = () => {
        if(index < maxIndex) setIndex(index + 1)
    }

    return(
        <section className="mt-6 py-4 px-16 overflow-hidden">
            <div className="font-bold text-xl text-white">Only On Netflix</div>
            <div className="flex gap-4 relative items-center w-full group">
                <button onClick={handlePrev} className="absolute z-100 bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -left-4 text-white"><FaCaretLeft size={30} /></button>
                <div className="flex gap-4 transition-transform duration-500" style={{transform: `translateX(-${index * moveBy}px)`}}>
                    {
                        cards_data.map((card, i) => (
                            <div key={i} onClick={() => navigate(`/${card.id}`)} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="flex-shrink-0 w-70 h-40 cursor-pointer bg-black rounded-[6px] mt-4 relative">
                                <img src={card.image} alt="" className="h-full w-full rounded-[6px]" />
                                {
                                  active === i && <><div className="absolute bg-gradient-to-t from-black/100 via-black/30 to-black/5 inset-0"></div>
                                                    <div className="absolute bottom-2 text-white right-2 font-bold">{card.name}</div>
                                                    </>
                                }
                            </div>
                        ))
                    }
                                </div>
                <button onClick={handleNext} className="absolute bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -right-12 text-white"><FaCaretRight size={30} /></button>
            </div>
        </section>
    )
}

export default NetflixOnly