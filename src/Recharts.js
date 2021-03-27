import { LineChart, Line, ResponsiveContainer } from "recharts";
import randomArray from "./fake_data";
const Data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
  {
    name: "Page H",
    pv: 2400,
  },
  {
    name: "Page I",
    pv: 2398,
  },
  {
    name: "Page J",
    pv: 8800,
  },
  {
    name: "Page K",
    pv: 3508,
  },
  {
    name: "Page L",
    pv: 6800,
  },
  {
    name: "Page M",
    pv: 4800,
  },
  {
    name: "Page N",
    pv: 5300,
  },
  {
    name: "Page H",
    pv: 2400,
  },
  {
    name: "Page I",
    pv: 2398,
  },
  {
    name: "Page J",
    pv: 8800,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
];
const data = [{ name: "Page", pv: 0 }, ...randomArray()];
export default function Example() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="pv"
            stroke="springgreen"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
