import logo from "../assets/logo.png"
import search from "../assets/search_icon.svg"
import notification from "../assets/bell_icon.svg"
import user from "../assets/profile_img.png"
import caret from "../assets/caret_icon.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })


    return(
        <section className={`fixed z-200 top-0 right-0 left-0 transition-colors duration-300 ${scrolled ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"} `}>
            <div className="max-w-screen-2xl m-auto px-4 md:px-16 py-4 text-white flex justify-between items-center relative">
                {/* Left side of the nav */}
                <div className="flex gap-10">
                    <img className="h-6" src={logo} alt="" />
                    {/* navs */}
                    <ul className="lg:flex gap-6 text-[14px] hidden">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>TV Show</Link></li>
                        <li><Link>Movies</Link></li>
                        <li><Link>New & Popular</Link></li>
                        <li><Link>My list</Link></li>
                        <li><Link>Browse by languages</Link></li>
                    </ul>
                </div>
                {/* Right side of the nav */}
                <div className="flex gap-2">
                    {/* Search box container */}
                    <div className="relative w-28 flex items-center">
                        <input type="text" 
                            className="w-full p-1 ps-10 absolute"
                            placeholder="children"/>
                        <img className="absolute left-2" src={search} alt="" />
                    </div>
                    <img src={notification} alt="" />
                    <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1.5">
                        <img src={user} className="rounded-[4px]" alt="" />
                        <img src={caret} alt="" />
                    </div>
                </div>
                </div>
                {
                    isOpen &&
                    <div className={`absolute text-white top-16 h-dvh bg-black left-0 right-0 lg:hidden`}>
                        <ul className="flex flex-col justify-center gap-10 px-4 md:px-16 h-screen uppercase lg:hidden">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link>TV Show</Link></li>
                                <li><Link>Movies</Link></li>
                                <li><Link>New & Popular</Link></li>
                                <li><Link>My list</Link></li>
                                <li><Link>Browse by languages</Link></li>
                        </ul>
                    </div>
                }
        </section>
    )
}

export default Navbar