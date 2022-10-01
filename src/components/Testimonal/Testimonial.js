import { Rating } from '@mui/material';
import testimonialImg from '../../assets/testimonial.svg';
import './testimonial.css';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

const Testimonial = () =>
{
    return (
        <div className="testimonial">
            <div className='testimonial_info'>
                <Rating name="read-only" value={ 5 } readOnly />
                <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                <h4>Edward Newgate</h4>
                <p>Founder Circle</p>
            </div>
            <div className='testimonial_img'>
                <img src={ testimonialImg } alt="testimontal" />
                <div className="testimonial_btns">
                    <button><BiLeftArrowCircle /></button>
                    <button><BiRightArrowCircle /></button>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
