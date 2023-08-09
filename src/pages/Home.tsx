import React from "react";
import Hero from "../components/home/Hero";
import PriceIncrease from "../components/home/PriceIncrease";
import TariffCalculator from "../components/home/TariffCalculator";
import TechnicalQuestions from "../components/home/TechnicalQuestions";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <TariffCalculator />
            <PriceIncrease />
            <TechnicalQuestions />
        </>
    )
}

export default Home;