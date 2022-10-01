import heroImg from "../assets/hero.svg";
import section2Img from '../assets/section2.svg'
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
                <img src={heroImg} alt="hero_img" />
            </div>

            { /* second section */}

            . <div className="homepage-section2">
                <img src={section2Img} alt="section2Img" />
                <div>
                    <h1>A new way to explore the world </h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
