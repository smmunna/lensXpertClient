import ExploreBg from "../../../assets/images/slider1.jpg"

const Explore = () => {
    return (
        <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: `url(${ExploreBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-white">
                    <h1 className="mb-5 text-5xl font-bold">Explore your Photography Classes</h1>
                    <p className="mb-5">Stream 2000+ of our top classes, anytime, anywhere all at your own pace.
                    </p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Explore;
