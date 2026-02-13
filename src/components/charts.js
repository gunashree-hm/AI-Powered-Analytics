import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Charts() {
  const data = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 200 }
  ];

  return (
    <div className="card">
      <h3>Monthly Sales Overview</h3>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#4f46e5" />
      </BarChart>

      {/* Insight text below chart */}
      <p style={{ marginTop: "10px" }}>
        Highest sales were recorded in March, while April shows a decline.
      </p>
    </div>
  );
}

export default Charts;
