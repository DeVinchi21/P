
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = [
  { month: 'Jan', value: 50 },
  { month: 'Feb', value: 80 },
  { month: 'Mar', value: 120 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 110 },
];

const ChartTableComponent = () => {
  return (

    <div className='col-lg-10 main--section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Data Table</h2>
            <table className='table table-striped table-hover table-responsive'>
              <thead className='thead-inverse'>
                <tr>
                  <th>Month</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((data, index) => (
                  <tr key={index}>
                    <td className='row'>{data.month}</td>
                    <td>{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <h2>Data Chart</h2>
            <ResponsiveContainer width="100%" aspect={1}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTableComponent;
