import {useEffect, useState} from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from "@/data/FirebaseConfig";

export const useFetchTest = () => {
    const [datalist, setDataList] = useState<any>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const fetchTest = async () => {

        try {
            const tempDataList: any[] = [];
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                tempDataList.push(doc.data());
            });

            setDataList(tempDataList)

            setLoading(false);
        }catch (error) {
            console.log(error);
            setError(error)
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchTest()
    }, [])


    console.log(datalist)

    return { datalist, loading, error }
}