import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="border border-[#FF3811] rounded-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Car" className="rounded-xl w-full" />
            </figure>
            <div className="p-10 ">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center justify-between text-xl font-semibold text-[#FF3811] my-3">
                    <p className=''>Price: ${price}</p>
                    <FaArrowRight />
                </div>
                <div className="card-actions">
                    <Link to={`/book/${_id}`} className="btn btn-sm md:btn-md bg-[#FF3811] text-white">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object.isRequired
};

export default ServicesCard;
