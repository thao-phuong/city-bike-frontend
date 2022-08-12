import "./App.css";
import { Journeys } from "./components/Journeys";
import { Stationlist } from "./components/Stationlist";
import { fetchTrips, link_05_home, staionURL } from "./components/Api";
import { useState, useEffect } from "react";

const App = () => {
  const [month_05_home, setMonth_05_home] = useState([]);
  const [stations, setStations] = useState([])
  
  useEffect(() => {
    fetchTrips(link_05_home).then((result) => {
      setMonth_05_home(result);
      console.log("Month 05:", month_05_home);
    });
     fetchTrips(staionURL).then((result) => {
      setStations(result);
      console.log("Station:", stations);
    })
  }, []);

  return (
    <div className="App">
      <h1>City Bike</h1>

      <Stationlist name={"Station list"} stations={stations} />
      <Journeys trip={month_05_home} name={"Month 05"}/>
    </div>
  );
};

export default App;
