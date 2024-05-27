import Link from 'next/link'
import {FiArrowUpRight, FiChevronLeft} from "react-icons/fi";
import {montserrat} from "@/fonts/Fonts";

export default function NotFound() {
    return (
        <article className={`flex items-center justify-center min-h-screen`}>
            <div className="container-root">
                <div className="wrapper text-center">
                    <h2 className={`text-5xl font-extrabold ${montserrat.className} mb-4`}>Page introuvable</h2>
                    <Link href="/sneakers" className={`text-blue-500 flex items-center justify-center gap-2 ${montserrat.className} font-medium`}>Boutique unred <span><FiArrowUpRight /></span></Link>
                </div>
            </div>

        </article>
    )
}