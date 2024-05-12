import { collection, addDoc } from "firebase/firestore";
import {useEffect, useRef, useState} from "react";

export const Post = (data) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    async function addData(){
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: data.firstName,
                last: data.lastName,
                phone: data.phone
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    useEffect(() => {
        addData();
    })


    return { data, isLoading, error}
}
