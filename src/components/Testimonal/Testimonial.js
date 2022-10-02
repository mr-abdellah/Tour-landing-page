import { Rating } from "@mui/material";
import testimonalImg from "../../assets/testimonial.svg";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <p>
        “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac
        scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
      </p>

      <div className="testimonial_user">
        <div className="testimonial_user_info">
          <h3>Edward Newgate</h3>
          <p>Founder Circle</p>
          <Rating name="read-only" value={5} readOnly />
        </div>
        <div className="testimonial_user_img">
          <img src={testimonalImg} alt="testimonal" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

// <div className="testimonial">
//     <div className='testimonial_info'>
//         <Rating name="read-only" value={ 5 } readOnly />
//         <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
//         <h4>Edward Newgate</h4>
//         <p>Founder Circle</p>
//     </div>
//     <div className='testimonial_img'>
//         <img src={ testimonalImg } alt="testimontal" />
//         <div className="testimonial_btns">
//             <button><BiLeftArrowCircle /></button>
//             <button><BiRightArrowCircle /></button>
//         </div>
//     </div>
// </div>;
