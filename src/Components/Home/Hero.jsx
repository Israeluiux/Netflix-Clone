import hero from "../../assets/hero_banner.jpg"
import title from "../../assets/hero_title.png"
import play from "../../assets/play_icon.png"
import info from "../../assets/info_icon.png"
import { Link } from "react-router-dom"
import Popular from "./Popular"
import { logo } from "../../assets/cards/Cards_data"

const Hero = () => {
    return(
        <div className="h-200 relative">
            {
                logo.map((each) => (
                    <>
                <img className="h-full w-full object-cover" src={each.image} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/100"></div>
                <div className="relative -mt-140 bottom-8 text-white px-16  gap-8">
                        <div className="flex flex-col gap-6">
                    <img src={each.logo} alt="" className="h-40 w-fit" />
                        <p className="w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nam aspernatur minus nisi, voluptatem nulla, delectus assumenda, expedita natus animi nostrum praesentium eius architecto obcaecati asperiores modi cum? Quia, suscipit.</p>
                        <div className="flex gap-3">
                            <Link className="p-3 px-8 text-black rounded-[6px] bg-white flex gap-2"><img src={play} className="h-6" alt="" /> Play</Link>
                            <Link className="p-3 px-8 bg-white/40 backdrop-blur-md rounded-[6px] flex gap-2"><img src={info} className="h-6" alt="" /> More info</Link>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden px-16 text-white z-30 -mt-8">
                    <Popular />
                </div>
                </>
                ))
            }
        </div>
    )
}

export default Hero