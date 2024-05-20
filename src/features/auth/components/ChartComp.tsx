"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Janvier",
    order: 80,
    ca: 8000,
    amt: 2400,
  },
  {
    name: "Fevrier",
    order: 70,
    ca: 7000,
    amt: 2210,
  },
  {
    name: "Mars",
    order: 25,
    ca: 2500,
    amt: 2290,
  },
  {
    name: "Avril",
    order: 152,
    ca: 25000,
    amt: 2000,
  },
  {
    name: "Mai",
    order: 200,
    ca: 45000,
    amt: 2181,
  },
  {
    name: "Juin",
    order: 500,
    ca: 70000,
    amt: 2500,
  },
  {
    name: "Juillet",
    order: 45,
    ca: 4300,
    amt: 2100,
  },
];
interface chartType {
  line?: boolean;
}
export const ChartComp = ({ line }: chartType) => {
  return (
    <>
      {line ? (
        <AreaChart
          width={1024}
          height={400}
          data={data}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="ca" stroke="#496CFA" fill="#496CFA" />
        </AreaChart>
      ) : (
        <BarChart
          width={1024}
          height={400}
          data={data}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ca" fill="#496CFA" />
        </BarChart>
      )}
    </>
  );
};
