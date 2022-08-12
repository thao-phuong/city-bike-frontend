export const Journeys = ({ trip, name }) => {
  return (
    <>
      <h2>List of Trips</h2>
      <h3>{name}</h3>

      <table>
        <thead>
          <tr>
            <th>Departure station</th>
            <th>Return station</th>
            <th>Covered distance (km)</th>
            <th>Duration (min)</th>
          </tr>
        </thead>

        <tbody>
          {trip.map((trip) => (
            <tr key={trip._id}>
              <td>{trip["Departure station name"]}</td>
              <td>{trip["Return station name"]}</td>
              <td>{trip["Covered distance (m)"]/1000}</td>
              <td>{Math.round(trip["Duration (s)"]/60)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
