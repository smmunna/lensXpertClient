import { Helmet } from "react-helmet";
import Slider from "./Slider/Slider";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | LensXpert</title>
            </Helmet>
            <Slider />
            <PopularClass />
            <PopularInstructor/>
        </div>
    );
}

export default Home;
