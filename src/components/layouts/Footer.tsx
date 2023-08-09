import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="container mx-auto lg:px-20 xl:px-8">
            <div className="bg-white px-7 pt-6 pb-5 flex flex-col lg:flex-row">
                <Link to="/"><img src="/images/simpleo-logo.svg" alt="" className="w-[135px] xl:w-[190.89px] mb-5 lg:mb-0"/></Link>
                <div className="flex w-full lg:ml-auto lg:space-x-7 space-x-0 items-center justify-between lg:justify-end">
                    <div>
                        <Link to="/" className="font-medium text-base xl:text-lg text-gray-medium">
                            Impressum
                        </Link>
                    </div>
                    <div className="h-4 w-[2px] bg-gray-medium"></div>
                    <div>
                        <Link to="/" className="font-medium text-base xl:text-lg text-gray-medium">
                            AGB
                        </Link>
                    </div>
                    <div className="h-4 w-[2px] bg-gray-medium"></div>
                    <div>
                        <Link to="/" className="font-medium text-base xl:text-lg text-gray-medium">
                            Lorem Ipsum
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;