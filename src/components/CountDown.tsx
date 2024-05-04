"use client"

import React, {useState, useEffect, useMemo} from 'react';
import {montserrat} from "@/fonts/Fonts";

const formatNumberWithZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
};

export const Countdown: React.FC = () => {
    const endDate = useMemo(() => new Date('2024-05-30T00:00:00Z'), []);

    const [remainingTime, setRemainingTime] = useState<number>(endDate.getTime() - Date.now()); // Temps restant jusqu'à la date de fin

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Date.now();
            const remaining = endDate.getTime() - currentTime;

            // Arrêter le compte à rebours lorsque la date de fin est atteinte
            if (remaining <= 0) {
                clearInterval(interval);
            }

            setRemainingTime(remaining);
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    // Convertir le temps restant en jours, heures, minutes et secondes avec zéro devant si nécessaire
    const days = formatNumberWithZero(Math.max(0, Math.floor(remainingTime / (1000 * 60 * 60 * 24))));
    const hours = formatNumberWithZero(Math.max(0, Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
    const minutes = formatNumberWithZero(Math.max(0, Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))));
    const seconds = formatNumberWithZero(Math.max(0, Math.floor((remainingTime % (1000 * 60)) / 1000)));

    return (
        <ul className="lg:absolute lg:top-1/2 lg:left-1/2  flex items-center lg:gap-8 gap-4 transform lg:-translate-x-1/2  z-10">
            <li
                className={`lg:text-5xl text-2xl text-white font-extrabold border-4 border-solid border-white rounded-2xl flex flex-col items-center justify-center gap-4 lg:p-4 p-2 ${montserrat.className}`}
            >{days}
                <span className={`block lg:text-4xl font-medium uppercase text-xs ${montserrat.className}`}>Jours</span>
            </li>

            <li
                className={`lg:text-5xl text-2xl text-white font-extrabold border-4 border-solid border-white rounded-2xl flex flex-col items-center justify-center gap-4 lg:p-4 p-2 ${montserrat.className}`}
            >{hours}
                <span className={`block lg:text-4xl font-medium uppercase text-xs ${montserrat.className}`}>Heures</span>
            </li>

            <li
                className={`lg:text-5xl text-2xl text-white font-extrabold border-4 border-solid border-white rounded-2xl flex flex-col items-center justify-center gap-4 lg:p-4 p-2 ${montserrat.className}`}
            >{minutes}
                <span className={`block lg:text-4xl font-medium uppercase text-xs ${montserrat.className}`}>Minutes</span>
            </li>

            <li
                className={`lg:text-5xl text-2xl text-white font-extrabold border-4 border-solid border-white rounded-2xl flex flex-col items-center justify-center gap-4 lg:p-4 p-2 ${montserrat.className}`}
            >{seconds}
                <span className={`block lg:text-4xl font-medium uppercase text-xs ${montserrat.className}`}>Secondes</span>
            </li>
        </ul>
    );
};
