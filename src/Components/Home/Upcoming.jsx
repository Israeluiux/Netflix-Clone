import { useState } from "react"
import cards_data from "../../assets/cards/Cards_data"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

const Upcoming = () => {
    const [index, setIndex] = useState(0)
    const totalCard = 4
    const cardWidth = 280
    const gap = 16
    const moveBy = (cardWidth + gap) * totalCard
    const maxIndex = Math.ceil(cards_data.length / totalCard) - 1


    const handlePrev = () => {
        if(index > 0) setIndex(index - 1)
    }

    const handleNext = () => {
        if(index < maxIndex) setIndex(index + 1)
    }

    return(
        <section className="mt-6 py-4 px-16 overflow-hidden">
            <div className="font-bold text-xl text-white">Upcoming</div>
            <div className="flex gap-4 relative items-center w-full group">
                <button onClick={handlePrev} className="absolute bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -left-4 text-white"><FaCaretLeft size={30} /></button>
                {/* <div className="flex transition-transform duration-500" style={{transform: `translateX(-${index * moveBy}px)`}}>
                    </div> */}
                    {
                        cards_data.map(card => (
                            <div className="flex-shrink-0 w-70 h-40 bg-black rounded-[6px] mt-4 overflow-hidden">
                                <img src={card.image} alt="" className="h-full w-full rounded-[6px]" />
                            </div>
                        ))
                    }
                <button onClick={handleNext} className="absolute bg-black/50 backdrop-blur-2xl p-3 rounded-4xl -right-12 text-white"><FaCaretRight size={30} /></button>
            </div>
        </section>
    )
}

export default Upcoming