import {useAuth} from "@/features/auth/components/AuthProvider";


export const Profil = () => {
    const auth = useAuth();

    return (
        <p className="text-sm text-slate-500">
            {auth?.email}
        </p>
    )
}