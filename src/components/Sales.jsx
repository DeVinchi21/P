import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';

const petrolStationData = [
  { month: 'Jan', sales: 500000 },
  { month: 'Feb', sales: 750000 },
  { month: 'Mar', sales: 600000 },
  { month: 'Apr', sales: 900000 },
  { month: 'May', sales: 1000000 },
  { month: 'Jun', sales: 800000 },
];

const SalesDashboard = () => {
  return (
    <div className="col-lg-10 main--section">
      <div className="container">
        <h1>Sales Dashboard</h1>
        <div className="row">
          <div className="col-md-6">
            <SalesTable />
          </div>
          <div className="col-md-6">
            <SalesChart />
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesTable = () => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Month</th>
        <th>Sales (Ksh)</th>
      </tr>
    </thead>
    <tbody>
      {petrolStationData.map((data, index) => (
        <tr key={index}>
          <td>{data.month}</td>
          <td>{data.sales.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SalesChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={petrolStationData}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default SalesDashboard;
