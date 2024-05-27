import {useEffect, useState} from "react";
import data from "../data/shoes.json";
import { dataCardShoesType, dataShoesType } from "@/types";
import {useDispatch} from "react-redux";
import {setShoesData} from "@/redux/ShoesAction";

export const useFetchShoesById = (id: number) => {
    const [oneShoes, setOneShoes] = useState<dataCardShoesType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchById = async () => {
            try {
                // const res = fetch('/data/shoes.json');
                // if (!res.ok) {
                //     throw new NotFound("Failed fetching shoes.");
                // }
                // const data = await res.json();

                const res: any = data.shoes.find((shoe) => shoe.id === id);

                if (!res) {
                    throw new Error('Shoes not found');
                }

                setOneShoes(res)
                dispatch(setShoesData(res));

                setIsLoading(false)
            }   catch (error) {
                setError(error as Error)
                setIsLoading(false)
            }
        }

        fetchById();

    }, [dispatch, id])

    return { oneShoes, isLoading, error }
}