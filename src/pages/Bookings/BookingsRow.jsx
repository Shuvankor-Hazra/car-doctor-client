
import PropTypes from 'prop-types';


const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    // console.log(booking);

    const { _id, img, price, service_id, customerName, date, service, status } = booking;

    return (
        <tr className='text-lg'>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-md  w-24 h-24">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-75">{service_id}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>
                {date}
            </td>
            <td>
                ${price}
            </td>
            <th>
                {
                    status === 'confirm' ? <span className='text-xl font-bold text-[#FF3811]'>Confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-sm md:btn-md bg-[#FF3811] text-white">Confirm</button>
                }
            </th>
        </tr>
    );
};


BookingsRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func.isRequired,
    handleBookingConfirm: PropTypes.func.isRequired
};


export default BookingsRow;
