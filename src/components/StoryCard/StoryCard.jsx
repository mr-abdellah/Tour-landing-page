import { Link } from "react-router-dom";
import "./StoryCard.css";
import img1 from "../../assets/s1.svg";

const StoryCard = ({ img = img1, title='The many benefits of taking a healing holiday', desc='Helaing holidays are on the rise to help maximise your health and happines...' }) => {
  return (
    <div className="story_card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="/">Read More</Link>
    </div>
  );
};

export default StoryCard;
