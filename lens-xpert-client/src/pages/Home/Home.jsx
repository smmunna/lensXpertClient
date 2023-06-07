import { Helmet } from "react-helmet";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | LensXpert</title>
            </Helmet>
            <Slider/>
        </div>
    );
}

export default Home;
