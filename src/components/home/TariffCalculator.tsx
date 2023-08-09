import React from "react";

const TariffCalculator: React.FC = () => {
    return (
        <div className="container mx-auto lg:px-20 xl:px-8 pt-16 lg:pt-8 pb-16 lg:pb-12">
            <div className="px-7">
                <p className="text-center text-3xl lg:text-4xl font-extrabold text-blue-dark px-12 lg:px-0">Der faire Tarifrechner für Strom</p>
                <div className="px-10 lg:px-0 w-full flex flex-col lg:flex-row mt-10 xl:mt-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-xl text-blue-dark font-extrabold">Überblick ohne Hindernisse</p>
                        <p className="mt-5 text-lg xl:text-xl text-gray-medium pr-0 lg:pr-4">
                            Blindtext: Im ersten Ranking werden Boni nicht in den Gesamtpreis einberechnet. Ein guter Anhaltspunkt, welche Kosten im Zweiten Belieferungsjahr entstehen.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left ml-auto mt-9 lg:mt-0 pl-0 lg:pl-12">
                        <p className="text-xl text-blue-dark font-extrabold">Keine “Nullnummern”</p>
                        <p className="mt-5 text-lg xl:text-xl text-gray-medium">
                            Blindtext: Bei uns herrscht Gleichberechtigung! Wir vergeben keine werblichen "Null-Positionen" - allein der Tarifpreis bestimmt die Platzierung des Versorgers in unserem Ranking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TariffCalculator;