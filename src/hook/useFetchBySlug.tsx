import {useEffect, useState} from "react";
import data from "../data/shoes.json";
import { dataCardShoesType, dataShoesType } from "@/types";

export const useFetchBySlug = (slug: string | string[]) => {
    const [oneShoes, setOneShoes] = useState<dataCardShoesType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const fetchBySlug = async () => {
            try {
                // const res = fetch('/data/shoes.json');
                // if (!res.ok) {
                //     throw new Error("Failed fetching shoes.");
                // }
                // const data = await res.json();

                const res: any = data.shoes.find((shoe) => shoe.slug === slug);

                if (!res) {
                    throw new Error('Shoes not found');
                }

                setOneShoes(res)
                setIsLoading(false)
            }    catch (error) {
                setError(error as Error)
                setIsLoading(false)
            }
        }

        fetchBySlug();

    }, [slug])

    return { oneShoes, isLoading, error }
}
