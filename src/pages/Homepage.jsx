import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";
import section2Img from '../assets/section2.svg';
import section3Img from '../assets/section3.svg';
import DestinationCard from "../components/DestinationCard";
import '../styles/homepage.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
//Importing images
import des1 from '../assets/destination1.png';
import des2 from '../assets/destination2.png';
import des3 from '../assets/destination3.png';
import des4 from '../assets/destination4.png';
//

const Homepage = () =>
{

    const data = [
        {
            country: 'Indonesia',
            city: 'Raja Ampat',
            img: des1
        },
        {
            country: 'China',
            city: 'Fanjingshan',
            img: des2
        },
        {
            country: 'Switzerland',
            city: 'Vevey',
            img: des3
        },
        {
            country: 'Montenegro',
            city: 'Skadar',
            img: des4
        },
    ];

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
                <img src={ heroImg } alt="hero_img" />
            </div>

            { /* second section */ }

            . <div className="homepage-section2">
                <img src={ section2Img } alt="section2Img" />
                <div>
                    <h1>A new way to explore the world </h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                        trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <button>Learn more</button>
                </div>
            </div>

            {/* best destinations section */ }

            <div className="homepage-bd">
                <div className="homepage-bd-title">
                    <h3>Featured destinations</h3>
                    <Link to='/destinations'>View all <MdKeyboardArrowRight /></Link>
                </div>

                <div className="homepage-featured-destinations">
                    { data.map( card => <DestinationCard img={ card.img } country={ card.country } city={ card.city} />
                    ) }
                </div>
            </div>

            {/* */ }

            <div className="guide-section">
                <div>
                    <h2>Guides by Thousand Sunny</h2>
                    <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                    <button>Download</button>
                </div>
                <img src={ section3Img } alt="section3" />
            </div>
        </div>
    );
};

export default Homepage;
