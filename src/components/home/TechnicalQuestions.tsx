import React from "react";

const TechnicalQuestions: React.FC = () => {
    return (
        <div className="bg-gray-light">
            <div className="container mx-auto lg:px-20 xl:px-8 pt-11 pb-12">
                <div className="flex flex-col items-center px-7">
                    <p className="text-center text-4xl font-extrabold text-blue-dark px-8 lg:px-0">Weitere technische Fragen?</p>
                    <div className="flex flex-col lg:flex-row  mt-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-3 xl:pr-9">
                            <div className="flex flex-col lg:flex-row content-between w-full">
                                <p className="text-base xl:text-lg text-gray-medium my-auto font-medium">Vollständiger Name*</p>
                                <input className="ml-auto mt-4 lg:mt-0 appearance-none border-2 border-border-stroke rounded-md w-full lg:w-56 xl:w-[351px] h-[36px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div className="flex flex-col lg:flex-row content-between w-full mt-6 lg:mt-7">
                                <p className="text-base xl:text-lg text-gray-medium my-auto font-medium">E-Mail adresse*</p>
                                <input className="ml-auto mt-4 lg:mt-0 appearance-none border-2 border-border-stroke rounded-md w-full lg:w-56 xl:w-[351px] h-[36px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                            <div className="flex flex-col lg:flex-row content-between h-full">
                                <span className="text-base xl:text-lg text-gray-medium mb-auto pt-1 font-medium whitespace-nowrap mr-2">Ihr Anliegen</span>
                                <textarea className="ml-auto mt-4 lg:mt-0 appearance-none border-2 border-border-stroke rounded-md w-full py-2 px-3 h-28 lgh:h-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"/>
                            </div>
                        </div>
                    </div>
                    <button className="rounded-md w-[192px] lg:w-[234px] mt-6 h-[48px] lg:h-[55px] bg-blue-dark hover:opacity-75">
                        <p className="text-base lg:text-lg font-medium text-white tracking-wide">Anfrage absenden</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TechnicalQuestions;