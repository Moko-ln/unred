import { dataCardShoesType } from "@/types";
import Image from "next/image";

export const ListProducts = ({ data }: any) => {
  return (
    <table className="table-auto border-collapse border-spacing-2">
      <thead>
        <tr className="text-left h-20 text-slate-700">
          <th>Image</th>
          <th>Model</th>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: dataCardShoesType) => (
          <tr
            key={item.id}
            className={`text-slate-500 ${item.id % 2 == 0 ? "bg-slate-50" : "bg-slate-100"} h-20`}
          >
            <td>
              <div className="h-20 w-20 rounded-sm">
                <figure className="h-20 w-20">
                  <Image
                    src={`/uploads/man/current/${item.image}.png`}
                    alt={`Image de couverture`}
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "3px",
                    }}
                  />
                </figure>
              </div>
            </td>
            <td>{item.model}</td>
            <td>{item.title}</td>
            <td>{item.price} €</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
