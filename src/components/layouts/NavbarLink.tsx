import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    text: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({to, text}) => {
    const location = useLocation();
    const isSelected = location.pathname === to;

    return (
        <Link to={to} className="">
            <p
                className={`
                    hidden lg:block
                    xl:px-4
                    px-2
                    py-1
                    text-center
                    hover:text-white
                    hover:bg-blue-dark
                    rounded-md
                    text-sm
                    xl:text-lg
                    border-2
                    border-border-stroke font
                    ${isSelected ? 'text-blue-dark font-extrabold' : 'text-gray-medium font-medium'}
                `}
            >
                { text }
            </p>
            <p
                className={`
                    w-full
                    block lg:hidden
                    xl:px-4
                    px-2
                    py-1
                    text-center
                    hover:text-white
                    hover:bg-blue-dark
                    rounded-md
                    text-sm
                    xl:text-lg
                    border-border-stroke font
                    ${isSelected ? 'text-blue-dark font-extrabold' : 'text-gray-medium font-medium'}
                `}
            >
                { text }
            </p>
        </Link>
    )
}

export default NavbarLink;