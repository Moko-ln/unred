import { montserrat } from "@/fonts/Fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiGrid } from "react-icons/fi";

export const DashButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/dashboard");
  };

  return (
    <div className="bg-blue-500 w-full order-first h-10">
      <div className="wrapper flex items-center justify-center h-full">
        <Link
          href={"/dashboard"}
          title="dashboard"
          className={`${montserrat.className} text-slate-50 flex items-center gap-2`}
        >
          <span className="text-slate-100">
            <FiGrid />
          </span>
          Dashboard du shop
        </Link>
      </div>
    </div>
  );
};
