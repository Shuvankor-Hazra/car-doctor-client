import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // const url = `https://car-doctor-server-nine-ashen.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;


    useEffect(() => {

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
            .then(res => {
                setBookings(res.data)
            })

    }, [url, axiosSecure])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure! You want to delete?')
        if (proceed) {
            fetch(`https://car-doctor-server-nine-ashen.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-nine-ashen.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id == id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center mb-10">Total Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;