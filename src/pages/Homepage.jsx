import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import heroImg from "../assets/hero.svg";
import '../styles/homepage.css'

const Homepage = () => {
    const [age, setAge] = useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="homepage">
            <div className="homepage-hero">
                <h2>Explore and <br /> Travel</h2>
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
    );
};

export default Homepage;
