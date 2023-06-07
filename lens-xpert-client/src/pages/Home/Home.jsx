import { Helmet } from "react-helmet";
import Slider from "./Slider/Slider";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import Explore from "./Explore/Explore";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | LensXpert</title>
            </Helmet>
            <Slider />
            <PopularClass />
            <PopularInstructor/>
            <Explore/>
        </div>
    );
}

export default Home;
