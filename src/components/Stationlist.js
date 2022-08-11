import axios from "axios";
import { useState, useEffect } from "react";

const staionURL = axios.create({
  baseURL: "https://whispering-brushlands-60824.herokuapp.com/api/stations",
});

export const Stationlist = () => {
  const [stations, setStations] = useState([]);
  const [filteredStation, setFilteredStation] = useState([]);
  const [key, setKey] = useState("");

  const fetchStations = async () => {
    try {
      let response = await staionURL.get();
      setStations(response.data);
      setFilteredStation(response.data);
      console.log(stations);
    } catch (error) {
      console.log(error);
    }
  };

  const stationFilter = async () => {
    let response = stations.filter((station) => {
      return station.Name.includes(key);
    });
    await setFilteredStation(response);
    console.log(response);
  };

  useEffect(() => {
    fetchStations();
  }, []);
  return (
    <>
      <h2>Station list</h2>
      <input
        name="Search"
        type="text"
        value={key}
        onChange={(e) => {
          setKey(e.target.value);
          console.log(key);
        }}
      /> &nbsp;
      <button type="submit" onClick={stationFilter}>
        Search
      </button> &nbsp;
      <button type="submit" onClick={fetchStations}>
        All Stations
      </button> <br /> <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>City</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {filteredStation.map((station) => (
            <tr key={station._id}>
              <td>{station.Name}</td>
              <td>{station.Operaattor}</td>
              <td>{station.Kaupunki}</td>
              <td>{station.Osoite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
