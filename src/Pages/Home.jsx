import Hero from "../Components/Home/Hero"
import NetflixOnly from "../Components/Home/NetflixOnly"
import Popular from "../Components/Home/Popular"
import Suggested from "../Components/Home/Suggested"
import TopPicks from "../Components/Home/TopPicks"
import Upcoming from "../Components/Home/Upcoming"

const Home = () => {
    return(
        <section className="max-w-screen-2xl m-auto">
            <Hero />
            <Suggested />
            <NetflixOnly />
            <Upcoming />
            <TopPicks />
        </section>
    )
}

export default Home