import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const salesData = [
  { month: 'Jan', sales: 25000 },
  { month: 'Feb', sales: 32000 },
  { month: 'Mar', sales: 41000 },
  { month: 'Apr', sales: 38000 },
  { month: 'May', sales: 42000 },
  { month: 'Jun', sales: 38000 },
];

const revenueData = [
  { fuelType: 'Gasoline', revenue: 150000 },
  { fuelType: 'Diesel', revenue: 90000 },
  { fuelType: 'LPG', revenue: 45000 },
  { fuelType: 'Electric', revenue: 6000 },
];

const salesDistributionData = [
  { fuelGrade: 'Regular', sales: 45000 },
  { fuelGrade: 'Premium', sales: 30000 },
  { fuelGrade: 'Diesel', sales: 25000 },
  { fuelGrade: 'Super', sales: 20000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PetrolStationDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fuel Sales Over Time</h5>
              <div style={{ width: '100%', height: 'auto' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue by Fuel Type</h5>
              <div style={{ width: '100%', height: 'auto' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      dataKey="revenue"
                      data={revenueData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales Distribution by Fuel Grade</h5>
              <div style={{ width: '100%', height: 'auto' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={salesDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fuelGrade" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetrolStationDashboard;
