import React from "react";

const PriceIncrease: React.FC = () => {
    return (
        <div className="bg-gray">
            <div className="container mx-auto lg:px-20 xl:px-8 pt-8 pb-14">
                <div className="flex flex-col items-center px-7">
                    <p className="text-center text-3xl lg:text-4xl font-extrabold text-blue-dark px-8 lg:px-0">Preiserhöhung erhalten?</p>
                    <p className="mt-9 text-lg xl:text-xl text-gray-medium leading-relaxed">
                        Blindtext: Aktuell kommt es zu massiven Preiserhöhungen in der Grundversorgung und bei anderen Anbietern. Wechseln Sie bevor die Preiserhöhung in Kraft tritt und sparen Sie zusätzlich zur Strompreisbremse bis zu 500 €:
                    </p>
                    <div className="flex mt-8">
                        <div className="px-2 h-7 flex bg-blue-dark items-center justify-center rounded-full">
                            <p className="text-white text-lg text-center font-bold">1</p>
                        </div>
                        <p className="ml-1 text-lg xl:text-xl text-gray-medium leading-relaxed">
                            Preiserhöhung Grundversorgung: Nutzen Sie unseren Stromvergleich und schließen Sie einen neuen Vertrag bei einem günstigeren Alternativanbieter mit Preisgarantie ab. Sie müssen Ihren Grundversorgungstarif nicht kündigen, der Wechsel erfolgt automatisch durch Ihren neuen Anbieter.
                        </p>
                    </div>
                    <div className="flex mt-2">
                        <div className="px-2 h-7 flex bg-blue-dark items-center justify-center rounded-full">
                            <p className="text-white text-lg text-center font-bold">2</p>
                        </div>
                        <p className="ml-1 text-lg xl:text-xl text-gray-medium leading-relaxed">
                            Preiserhöhung andere Anbieter: Machen Sie von Ihrem Sonderkündigungsrecht Gebrauch. Nutzen Sie hierfür unseren digitalen Kündigungsservice und schließen Sie im Anschluss einen neuen Vertrag bei einem günstigeren Alternativanbieter mit Preisgarantie ab.
                        </p>
                    </div>
                    <button className="rounded-md w-[241px] xl:w-[262px] h-[48px] xl:h-[55px] mt-5 bg-blue-dark hover:opacity-75">
                        <p className="text-base xl:text-lg font-medium text-white tracking-wide">Zum Kündigungsservice</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PriceIncrease;