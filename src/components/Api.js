
import axios from "axios";

export const staionURL = "https://whispering-brushlands-60824.herokuapp.com/api/stations"

export const link_05_home = "https://whispering-brushlands-60824.herokuapp.com/api/month_05";
export const link_05_all = "https://whispering-brushlands-60824.herokuapp.com/api/month_05/";

export const fetchTrips = async (link) => {
  let response = await axios.get(link);
  return response.data;
};
