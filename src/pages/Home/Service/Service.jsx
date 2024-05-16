// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";


const Service = () => {
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const services = useServices(asc, search);

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    // fetch(`https://car-doctor-server-nine-ashen.vercel.app/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText);
    }

    return (
        <div>
            <div className="text-center w-1/2 mx-auto">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h2 className="text-3xl lg:text-5xl font-bold my-5">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>
            <div className="flex justify-evenly mt-5">

                {/* ass-desc */}
                <button
                    onClick={() => setAsc(!asc)}
                    className="btn btn-sm md:btn-md bg-[#FF3811] text-white">
                    {asc ? 'Price: High to Low ' : 'Price: Low to High'}
                </button>

                {/* Search */}
                <form onSubmit={handleSearch}>
                    <div className="flex items-center gap-2">
                        <input type="search" name="search" placeholder="Search" className="input input-bordered border-2 border-orange-500 focus:outline-none focus:border-orange-500" />
                        <button type="submit" className="btn bg-[#FF3811] text-white">Search</button>
                    </div>

                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Service;