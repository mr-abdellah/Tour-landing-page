import heroImg from "../assets/hero.svg";
import '../styles/homepage.css'

const Homepage = () => {

    return (
        <div className="homepage">
            <div className="homepage-hero">
                <div className="homepage-hero-wrapper">
                    <h2>Explore and Travel</h2>
                    <p>Holiday finder</p>
                    <div className="line" />

                    <form className="inputs">
                        <select name="activity"  >
                            <option value="activity">Activity</option>
                        </select>
                        <select name="location" >
                            <option value="location">Location</option>
                        </select>
                        <select >
                            <option value="age">Age</option>
                        </select>
                        <select >
                            <option value="">11/10/2023</option>
                        </select>
                    </form>
                    <button>Explore</button>
                </div>
                    <img src={heroImg} alt="hero_img" /></div>
        </div>
    );
};

export default Homepage;
