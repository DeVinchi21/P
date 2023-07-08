import Charts from "./components/Charts";
import { useState } from 'react';

const Dashboard = () => {


  return (
    <>


      <div className="col-lg-10 main--section">
        <Stats />
        <hr/>
        <Charts />
      </div>



    </>
  );
};

export default Dashboard;



const statsData = [
  {
    station: 'Station 1',
    sales: '$50,000',
    staff: '300',
    stations: '5',
    revenue: '🔺 30,000'
  },
  {
    station: 'Station 2',
    sales: '$60,000',
    staff: '250',
    stations: '4',
    revenue: '🔺 25,000'
  },
  {
    station: 'Station 3',
    sales: '$45,000',
    staff: '200',
    stations: '3',
    revenue: '🔺 20,000'
  }
];

const Stats = () => {
  const [selectedStation, setSelectedStation] = useState('');

  const handleStationChange = (e) => {
    setSelectedStation(e.target.value);
  };

  const filteredStatsData = statsData.filter(
    (stat) => stat.station === selectedStation
  );

  return (
    <div className="container-fluid stats--section">
      <h2 className="display-6 stats--title">STATS</h2>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="card  mb-3">
            <div className="card-body">
              <h4 className="card-title">Petrol Station Filter</h4>
              <select
                className="form-control"
                value={selectedStation}
                onChange={handleStationChange}
              >
                <option value="">All Stations</option>
                {statsData.map((stat) => (
                  <option key={stat.station} value={stat.station}>
                    {stat.station}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {filteredStatsData.length > 0 ? (
          <>
            <div className="col-lg-3">
              <div className="card card--stats mb-3">
                <div className="card-body">
                  <h4 className="card-title">Sales</h4>
                  <p className="card-text">{filteredStatsData[0].sales}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card--stats mb-3">
                <div className="card-body">
                  <h4 className="card-title">Staff</h4>
                  <p className="card-text">{filteredStatsData[0].staff}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card--stats mb-3">
                <div className="card-body">
                  <h4 className="card-title">Stations</h4>
                  <p className="card-text">{filteredStatsData[0].stations}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card--stats mb-3">
                <div className="card-body">
                  <h4 className="card-title">Revenue</h4>
                  <p className="card-text">{filteredStatsData[0].revenue}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="col-lg-12">
            <div className="card card--stats">
              <div className="card-body">
                <p className="card-text">No station selected</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



