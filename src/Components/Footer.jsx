import facebook from "../assets/facebook_icon.png"
import instagram from "../assets/instagram_icon.png"
import twitter from "../assets/twitter_icon.png"
import youtube from "../assets/youtube_icon.png"

const Footer = () => {
    return(
        <div className="px-54 py-4 pt-20 text-white max-w-screen-2xl m-auto">
            {/* Social icons */}
            <div className="flex gap-4">
                <img src={facebook} alt="" className="h-8" />
                <img src={instagram} alt="" className="h-8" />
                <img src={twitter} alt="" className="h-8" />
                <img src={youtube} alt="" className="h-8" />
            </div>
            <div className="flex justify-between items-center mt-10">
                <ul className="flex flex-col gap-4">
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie References</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate information</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>Media Centre</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <p className="my-10 text-gray-500">&copy; 1997 - 2023 Netflix Inc</p>
        </div>
    )
}

export default Footer