import { Link, NavLink } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";
import { FaSignInAlt } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {

    const NavLinks = <>
        <li>
            <ScrollLink
                activeClass="underline underline-offset-8 font-semibold text-dark pb-3"
                className="text-dark font-semibold hover:opacity-65 cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Home
            </ScrollLink>
        </li>

        <li>
            <ScrollLink
                activeClass="underline underline-offset-8 font-semibold text-dark pb-3"
                className="text-dark font-semibold hover:opacity-65 cursor-pointer"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Features
            </ScrollLink>
        </li>
        <li>
            <ScrollLink
                activeClass="underline underline-offset-8 font-semibold text-dark pb-3"
                className="text-dark font-semibold hover:opacity-65 cursor-pointer"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Pricing
            </ScrollLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 font-semibold text-dark pb-3' : 'text-dark font-semibold hover:text-blue-500'} to="/shelters">About Us</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 font-semibold text-dark pb-3' : 'text-dark font-semibold hover:text-orange-300'} to="/reviews">Contact</NavLink></li>
    </>;

    return (
        <div className=' border-b bg-base-200 sticky top-0 z-40'>
            <div className="navbar justify-between w-5/6 mx-auto">
                <div >
                    <Link to='/' className="btn btn-ghost text-2xl text-black">
                        <figure><img className='w-10 rounded-lg' src="/logo.png" alt="" /></figure>
                        FurEver Home
                    </Link>
                </div>
                <div className='md:block hidden'>
                    {
                        <div className='flex items-center gap-24'>
                            <ul className='flex gap-5 w-fit'>
                                {NavLinks}
                            </ul>

                        </div>
                    }
                </div>
                <div className='md:block hidden'>
                    {
                        <div className='flex gap-3'>
                            <Link to='/registration' className='btn btn-outline'> <FaSignInAlt></FaSignInAlt> Join Now</Link>
                            <Link to='/registration' className='btn btn-neutral '> <LuLogIn></LuLogIn> Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;

