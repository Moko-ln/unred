"use client"

import {useEffect, useState} from "react";
import data from "../data/shoes.json"
import {LowerCaseAndRemoveSpaces} from "@/utils/LowerCaseAndREmoveSpaces";
// import {dataCardShoesType} from "@/types";

export const useFetchShoes = (filter?: any) => {
    const [shoesData, setShoesData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {

                // const res = fetch('/data/shoes.json');
                let filteredShoes;

                if (!filter || filter === "undefined" || filter === "null" || filter.title === "" || filter.title === "Tout") {
                    filteredShoes = data.shoes || [];
                } else {
                    filteredShoes = data.shoes?.filter(item => LowerCaseAndRemoveSpaces(item.model) === LowerCaseAndRemoveSpaces(filter.title)) || [];
                }

                // @ts-ignore
                setShoesData(filteredShoes);
                setIsLoading(false);
            } catch (error) {
                setError(error as Error);
                setIsLoading(false);
            }
        }

        fetchData();

    }, [filter]);

    return { shoesData, isLoading, error };
}