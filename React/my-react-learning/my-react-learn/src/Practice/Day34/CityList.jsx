import "./CityList.css";

function CityList() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bangalore" },
    { id: 3, name: "Hyderabad" },
    { id: 4, name: "Mumbai" },
    { id: 5, name: "Delhi" }
  ];

  return (
    <div className="city-container">
      <h2>City List</h2>
      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
