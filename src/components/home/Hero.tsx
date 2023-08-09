import React from "react";
import heroBG from '/images/hero-bg.jpeg';

const Hero: React.FC = () => {
    return (
        <>
            <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${heroBG})` }}>
                <div className="container mx-auto lg:px-20 xl:px-8 pt-14 pb-9">
                    <div className="px-7 lg:px-0 xl:px-7 flex flex-col lg:flex-row items-center lg:items-end justify-between">
                        <div className="rounded-t-md drop-shadow-2xl w-full lg:w-[362px] xl:w-[386.39px]">
                            <div className="rounded-t-md bg-blue-dark px-6 pt-5 pb-3 text-white">
                                <p className="text-2xl xl:text-3xl font-bold tracking-wide">Stromvergleich</p>
                                <p className="text-base xl:text-lg font-normal tracking-wide">Die besten Stromtarife finden</p>
                            </div>
                            <div className="px-6 pt-5 pb-6 bg-gray-extra-light flex flex-col items-center space-y-5">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base xl:text-lg text-gray-medium my-auto font-medium">Postleitzahl</p>
                                    <input className="appearance-none border-2 border-border-stroke rounded-md w-[171.47px] xl:w-[180px] h-[34.29px] xl:h-[36px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base xl:text-lg text-gray-medium my-auto font-medium">Verbrauch in kWh</p>
                                    <input className="appearance-none border-2 border-border-stroke rounded-md w-[171.47px] xl:w-[180px] h-[34.29px] xl:h-[36px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base xl:text-lg text-gray-medium my-auto font-medium">Haushaltsgrösse</p>
                                    <div className="w-[171.47px] xl:w-[180px] flex justify-between">
                                        <button className="flex items-center justify-center w-[39px] h-[34.295px] xl:h-[36px] border-2 border-border-stroke rounded-md bg-white grayscale hover:grayscale-0">
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px]"/>
                                        </button>
                                        <button className="flex items-center justify-center w-[39px] h-[34.295px] xl:h-[36px] border-2 border-border-stroke rounded-md bg-white grayscale hover:grayscale-0">
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px]"/>
                                        </button>
                                        <button className="flex items-center justify-center w-[39px] h-[34.295px] xl:h-[36px] border-2 border-border-stroke rounded-md bg-white grayscale hover:grayscale-0">
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px]"/>
                                        </button>
                                        <button className="flex items-center justify-center w-[39px] h-[34.295px] xl:h-[36px] border-2 border-border-stroke rounded-md bg-white grayscale hover:grayscale-0">
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px] mr-[1px]"/>
                                            <img src="/images/human-icon.svg" alt="" className="h-[21px]"/>
                                        </button>
                                    </div>
                                </div>
                                <button className="rounded-md w-52 xl:w-60 h-14 bg-blue-light hover:opacity-75">
                                    <p className=" text-lg font-medium text-white tracking-wide">Jetzt vergleichen</p>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-auto mt-6 lg:mt-0 lg:pt-5 xl:pt-0 xl:ml-auto lg:self-stretch xl:self-end flex lg:items-center justify-between lg:justify-center flex-row lg:flex-col xl:flex-row space-x-10 lg:space-x-0 xl:space-x-6 lg:space-y-3 h-full">
                            <img src="/images/co2-neutrales.svg" alt="" className="h-[93px] xl:h-[111px]"/>
                            <img src="/images/tiefstpreisgarantie.svg" alt="" className="h-[103] xl:h-[123px] "/>
                            <img src="/images/beste-kundenbetreuung.svg" alt="" className="h-p[h-103] xl:h-[123px]"/>
                        </div>
                        <div className="mt-20 lg:mt-0 xl:ml-8 rounded-t-md w-[281.388px] xl:w-[309.185px]">
                            <div className="rounded-t-md bg-blue-dark px-6 pt-5 pb-4 flex items-center">
                                <p className="text-white text-2xl xl:text-3xl font-bold tracking-wide">Energieauskunft</p>
                            </div>
                            <div className="pl-4 pt-1 pb-8 bg-blue-light flex flex-col space-y-3 relative">
                                <div className="absolute -right-7 top-10">
                                    <img src="/images/500.svg" alt="" className="h-[100px]"/>
                                </div>
                                <div className="flex">
                                    <img src="/images/circle-check-icon.svg" alt="" className="h-[23.662px] xl:h-[27px] mr-[9.65px]"/>
                                    <p className="text-base xl:text-lg text-white tracking-wide">Ausgewählte <span className="font-medium">Anbieter</span></p>
                                </div>
                                <div className="flex">
                                    <img src="/images/circle-check-icon.svg" alt="" className="h-[23.662px] xl:h-[27px] mr-[9.65px]"/>
                                    <p className="text-base xl:text-lg text-white tracking-wide">Ausgewählte <span className="font-medium">Tarife</span></p>
                                </div>
                                <div className="flex">
                                    <img src="/images/circle-check-icon.svg" alt="" className="h-[23.662px] xl:h-[27px] mr-[9.65px]"/>
                                    <p className="text-base xl:text-lg text-white tracking-wide">Sichere <span className="font-medium">Abwicklung</span></p>
                                </div>
                                <div className="flex">
                                    <img src="/images/circle-check-icon.svg" alt="" className="h-[23.662px] xl:h-[27px] mr-[9.65px]"/>
                                    <p className="text-base xl:text-lg text-white tracking-wide">Keine <span className="font-medium">Wechselgebühr</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;