
export const Stationlist = ({stations, name}) => {
  return (
    <>
      <h2>{name}</h2>
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
          {stations.map((station) => (
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
