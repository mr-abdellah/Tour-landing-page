import '../styles/DestinationCard.css';

const DestinationCard = ( { img, country, city } ) =>
{
    return (
        <div className="destinationCard">
            <img src={ img } alt='destination image' />
            <div>
                <h4>{ city }</h4>
                <p>{ country }</p>
            </div>
        </div>
    );
};

export default DestinationCard;
