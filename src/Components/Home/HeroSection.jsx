import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { FaSignInAlt } from "react-icons/fa";
const HeroSection = () => {
    return (
        <div id="home" className="mb-10">
            <div className="carousel w-full h-52 md:h-full">
                <div id="slide1" className="carousel-item relative w-full bg-cover bg-center   md:h-[70vh]" style={{ backgroundImage: "url('background_home.png')" }}>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="w-5/6  mx-auto flex flex-col items-center md:items-start justify-center md:h-[50vh]">
                            <div className="text-center w-2/4 flex flex-col items-center">
                                <div className="flex items-center justify-center my-4  gap-2">
                                    <img src="/logo.png" className="w-12 rounded-md" alt="" />
                                    <h2 className="text-2xl text-black font-semibold text-nowrap">FurEver Home</h2>
                                </div>
                                <h2 className="md:text-5xl text-2xl text-nowrap">Find Your Perfect Pet Companion</h2>
                                <h3 className="md:text-2xl text-nowrap">Bridging the Gap Between Pets and Loving Families</h3>
                                <p className="text-pretty hidden md:block">FurEver Home is your trusted platform for pet adoption, bringing together animal shelters and pet enthusiasts to find forever homes for pets in need. Explore detailed pet profiles, manage shelter information, and submit adoption requests—all through a secure, user-friendly interface designed with love for our furry friends. Join us in making a difference, one adoption at a time.</p>
                                <div className='flex gap-3 mt-5 mx-auto w-52 '>
                                    {
                                        <div className="flex gap-5">
                                            <Link to='/registration' className='btn btn-outline'> <FaSignInAlt></FaSignInAlt> Join For Free</Link>
                                            <Link to='/registration' className='btn btn-outline hidden md:flex'> <LuLogIn></LuLogIn> Login</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('baner.jpg')" }}>
                    <div className="w-full h-full bg-blue-100 bg-opacity-30">
                        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <div className="w-5/6  mx-auto flex flex-col items-center md:items-start justify-center md:h-[50vh]">
                            <div className="text-center w-2/4 flex flex-col justify-center items-center">
                                <div className="flex items-center justify-center my-4  gap-2">
                                    <img src="/logo.png" className="w-12 rounded-md" alt="" />
                                    <h2 className="text-2xl text-black font-semibold text-nowrap">FurEver Home</h2>
                                </div>
                                <h2 className="md:text-5xl text-2xl text-nowrap">Find Your Perfect Pet Companion</h2>
                                <h3 className="md:text-2xl text-nowrap">Bridging the Gap Between Pets and Loving Families</h3>
                                <p className="text-pretty hidden md:block">FurEver Home is your trusted platform for pet adoption, bringing together animal shelters and pet enthusiasts to find forever homes for pets in need. Explore detailed pet profiles, manage shelter information, and submit adoption requests—all through a secure, user-friendly interface designed with love for our furry friends. Join us in making a difference, one adoption at a time.</p>
                                <div className='flex gap-3 mt-5 mx-auto w-52 '>
                                    {
                                        <div className="flex gap-5">
                                            <Link to='/registration' className='btn btn-outline'> <FaSignInAlt></FaSignInAlt> Join For Free</Link>
                                            <Link to='/registration' className='btn btn-outline hidden md:flex'> <LuLogIn></LuLogIn> Login</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;