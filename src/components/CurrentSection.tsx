import { montserrat } from "@/fonts/Fonts";
import { shopSwipperType } from "@/types";
import { MySwipper } from "./swipper/MySwipper";

export const CurrentSection = ({ title, data }: shopSwipperType) => {
  return (
    <article className="min-h-[500px] py-10">
      <div className="container-root">
        <div className="wrapper flex flex-col gap-8">
          <h2 className={`${montserrat.className} text-2xl font-medium`}>
            {title}
          </h2>

          <MySwipper mydata={data} />

          <hr className="bg-slate-800 my-10" />
        </div>
      </div>
    </article>
  );
};
