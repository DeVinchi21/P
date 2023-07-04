import  { useState } from 'react';

const PetrolStationTable = () => {
  const petrolStations = [
    {
      id: 1,
      location: 'Kiambu',
      salesAmount: 1000,
      revenue: 50000,
      supervisor: 'John Doe'
    },
    {
      id: 2,
      location: 'Siaya',
      salesAmount: 1500,
      revenue: 75000,
      supervisor: 'Jane Smith'
    },
    {
      id: 3,
      location: 'Nairobi',
      salesAmount: 2000,
      revenue: 100000,
      supervisor: 'Bob Johnson'
    },
    {
      id: 4,
      location: 'Kiambu',
      salesAmount: 1200,
      revenue: 60000,
      supervisor: 'Alice Jones'
    },
    {
      id: 5,
      location: 'Nairobi',
      salesAmount: 1800,
      revenue: 90000,
      supervisor: 'David Wilson'
    }
  ];

  const [filter, setFilter] = useState('');

  // Filter the petrol stations based on the location
  const filteredPetrolStations = petrolStations.filter((station) =>
    station.location.toLowerCase().includes(filter.toLowerCase())
  );

  // Handle input change
  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="col-lg-10 main--section">
      <h2>Petrol Stations</h2>
      <hr />
      <section className="data--tables">
        <div className="filter--input">
          <label htmlFor="locationFilter">Filter by Location:</label>
          <input
            type="text"
            id="locationFilter"
            value={filter}
            onChange={handleInputChange}
          />
        </div>
        <hr/>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Sales Amount</th>
              <th>Revenue</th>
              <th>Supervisor</th>
            </tr>
          </thead>
          <tbody>
            {filteredPetrolStations.map((station) => (
              <tr key={station.id}>
                <td>{station.id}</td>
                <td>{station.location}</td>
                <td>{station.salesAmount}</td>
                <td>{station.revenue}</td>
                <td>{station.supervisor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PetrolStationTable;
