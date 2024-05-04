import {FiTrash2} from "react-icons/fi";
import {useDispatch} from "react-redux";
import {clearItemId} from "@/redux/CommandeSlice";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


export const ButtonRemoveCommande = ({ id }: { id: any }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    console.log(id)
    const handleClick = () => {
        dispatch(clearItemId(id));

        localStorage.removeItem("data");
    }


    const handlerToast = () => {
        toast.warning('Merci de selectionner une taille')
    }
    return (
        <button
            className="p-1 bg-slate-50 rounded-full border border-slate-100"
            onClick={handleClick}
        >
            <span className="text-slate-500 text-xl">
                <FiTrash2/>
            </span>
        </button>
    )
}