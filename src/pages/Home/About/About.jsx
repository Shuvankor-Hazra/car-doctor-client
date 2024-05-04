import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-10 lg:mb-24 mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-4/5 rounded-lg " />
                    <img src={parts} className="w-3/5 rounded-lg border-8 border-white absolute right-5 top-1/2" />
                </div>
                <div className='lg:w-1/2 space-y-3 mt-12'>
                    <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="text-3xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='pb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-sm md:btn-md bg-[#FF3811] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;