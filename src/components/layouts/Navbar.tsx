import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="block lg:hidden bg-blue-dark">
                <div className="container flex mx-auto lg:hidden py-2 justify-center items-center w-full px-7 h-[50px]">
                    <div className="flex justify-between w-full">
                        <div className="my-auto">
                            <img src="/images/support-icon.svg" alt="" className="h-[32px] w-[32px]"/>
                        </div>
                        <div className="h-auto w-[1px] bg-white opacity-10"></div>
                        <div className="my-auto">
                            <p className="font-extrabold text-xl text-white">
                                Telefon Support
                            </p>
                        </div>
                        <div className="h-auto w-[1px] bg-white opacity-10"></div>
                        <div className="my-auto text-white bg-purple-600 mt-0">
                            <p className="leading-4 text-base font-normal"><span className="font-extrabold">0800 333 53 53</span><br />Mo. bis Fr. 8-18 Uhr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:px-20 xl:px-8">
                <nav className="bg-white px-7 lg:px-0">
                    <div className="pt-5 pb-5 lg:pb-3 pt flex items-center">
                        <div className="flex items-center">
                            <Link to="/"><img src="/images/simpleo-logo.svg" alt="" className="w-[160px] xl:w-[273px]"/></Link>
                        </div>
                        <div className="hidden lg:block ml-auto">
                            <div className="flex items-center space-x-2">
                                <NavbarLink to="/" text="Haushaltsstrom" />
                                <NavbarLink to="/autostrom" text="Autostrom" />
                                <NavbarLink to="/warmestrom" text="Wärmestrom" />
                                <NavbarLink to="/gas" text="Gas" />
                            </div>
                        </div>
                        <div className="ml-9 xl:ml-14 bg-blue-dark rounded-lg pr-4 pl-4 xl:pr-6 xl:pl-3 py-2 hidden lg:flex items-start">
                            <img src="/images/support-icon.svg" alt="" className="w-[62.03px] xl:w-[78.412px]"/>
                            <div className="ml-2 xl:ml-5 flex flex-col">
                                <p className="text-white text-base xl:text-lg font-extrabold mb-1 xl:mb-2">Telefon Support</p>
                                <p className="text-white text-xl xl:text-2xl font-extrabold mb-1">0800 333 53 53</p>
                                <p className="text-white text-sm font-normal">Mo. bis Fr. 8-18 Uhr</p>
                            </div>
                        </div>
                        <div onClick={toggleNavbar} className="block lg:hidden ml-auto">
                            <img src="/images/nav.svg" alt="" className="w-[21px]"/>
                        </div>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="px-2 pt-2 pb-3 sm:px-3">
                            <NavbarLink to="/" text="Haushaltsstrom" />
                            <NavbarLink to="/autostrom" text="Autostrom" />
                            <NavbarLink to="/warmestrom" text="Wärmestrom" />
                            <NavbarLink to="/gas" text="Gas" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;