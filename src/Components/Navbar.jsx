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
    const [desktopMenu, setDesktopMenu] = useState(null)

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
                        <li><Link to='/mylist'>My list</Link></li>
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
                    <div onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setDesktopMenu(!desktopMenu)} onMouseLeave={() => setDesktopMenu(!desktopMenu)} className="relative flex items-center gap-1.5 cursor-pointer">
                        <img src={user} className="rounded-[4px]" alt="" />
                        <img src={caret} alt="" />
                        { desktopMenu &&
                            <ul className="hidden absolute top-6 bg-black w-37 lg:flex flex-col rounded-xl m-auto p-3 right-0">
                                <li className="p-1.5 hover:bg-white/10 rounded-[5px] cursor-pointer">Switch users</li>
                                <li className="p-1.5 hover:bg-white/10 rounded-[5px] cursor-pointer">User Profile</li>
                                <li className="text-red-500 bg-red-950 p-1.5 rounded-[5px] cursor-pointer">Log Out</li>
                            </ul>
                        }
                    </div>
                </div>
                </div>
                {
                    isOpen &&
                    <div className={`relative text-white h-dvh bg-black left-0 right-0 lg:hidden   transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-8 pointer-events-none'}`}>
                        <ul className={`flex flex-col justify-center gap-5 px-4 md:px-16 h-screen uppercase lg:hidden`}> 
                                <li><Link className="block" to='/'>Home</Link></li>
                                <li><Link className="block">TV Show</Link></li>
                                <li><Link className="block">Movies</Link></li>
                                <li><Link className="block">New & Popular</Link></li>
                                <li><Link className="block">My list</Link></li>
                                <li><Link className="block">Browse by languages</Link></li>
                                <li><Link className="block">Switch user</Link></li>
                                <li><Link className="block">Logout</Link></li>
                        </ul>
                    </div>
                }
        </section>
    )
}

export default Navbar