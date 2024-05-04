import { montserrat } from "@/fonts/Fonts";
import Link from "next/link";
import Image from "next/image";

import Unred from "@/assets/images/unred-black.svg"
export const Brand = () => {
  return (

      <div className="lg:grow w-2/5 flex items-center justify-center">
        <h1 className={`${montserrat.className}`}>
            <Link href="/" className="text-blue-500">
                <Image
                    src={ Unred }
                    alt="Logo"
                    width={120}
                    height={70}
                />
            </Link>
        </h1>
      </div>

  );
};
