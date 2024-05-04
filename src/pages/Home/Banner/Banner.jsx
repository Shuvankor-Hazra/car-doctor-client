import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md  bg-[#FF3811] text-white mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md bg-[#FF3811] text-white  mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md bg-[#FF3811] text-white  mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md bg-[#FF3811] text-white  mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md bg-[#FF3811] text-white  mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex items-center h-full bg-gradient-to-r from-[#151515]">
                    <div className='text-white space-y-6 lg:w-1/2 lg:ps-16 px-5'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-sm md:btn-md bg-[#FF3811] text-white  mr-6'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-outline text-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;