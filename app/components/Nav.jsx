import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { navLinks } from "~/utils/navLinks";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className=" flex justify-between items-center bg-gradient-to-r from-[#D0D8F4] to-[#EAEBEC]  pt-5 lg:pb-10">
            <div className="h-16 w-40 ml-2 lg:ml-16 ">
                {/* logo */}
                <img src="/new-logo.png" alt="Digipay logo" width={'100%'} height={'100%'} />
            </div>
            {/* Desktop menu */}
            <div className="flex mr-6">
                <ul className="hidden lg:flex text-black items-center mr-20">
                    {navLinks.slice(0, 3).map((navLink, index) => (
                        <li className='mx-4 cursor-pointer font-display text-black hover:text-brand-red text-lg uppercase font-bold transition duration-300 ease-in-out' key={index}>
                            <NavLink
                                to={navLink.path}
                                prefetch="intent"
                                end
                                // className={({ isActive }) => isActive ? 'underline' : ''}
                            >{navLink.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Link to='/login' className="hidden lg:flex">
                    <div className="w-32 h-10 bg-brand-red text-white font-bold rounded-[30px] grid place-items-center transition ease-in-out duration-300 hover:scale-110">
                        Login
                    </div>

                </Link>
            </div>
            {/* Mobile menu */}
            <div className="lg:hidden">
                <MenuIcon 
                    className="w-7 h-7 mr-8 text-black"
                    // onClick={() => setToggleMenu(true)} 
                />
                {
                    toggleMenu && (
                        <div className='flex flex-col justify-center items-center bg-black opacity-90 w-full h-screen fixed top-0 left-0 transition duration-500 ease-in-out'>
                            <XIcon 
                                className="w-7 h-7 absolute top-6 right-8 cursor-pointer text-black"
                                onClick={() => setToggleMenu(false)}
                            />
                            <ul className="list-none text-center mr-4 text-black">
                                {navLinks.slice(0,3).map((navLink, index) => (
                                    <li
                                        className="text-xl"
                                        key={index}
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        <NavLink
                                            to={navLink.path}
                                            prefetch='intent'
                                            className={({ isActive }) => isActive ? 'underline' : ''}
                                        >
                                            {navLink.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}