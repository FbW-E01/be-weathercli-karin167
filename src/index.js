import axios from "axios";
import { error } from "console";
import process from "process";

const location = process.argv[2];
const apiKey = "516e3acbadcda6f28f95462f2194ce4c";

console.log(location);
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
axios
  .get(url)
  .then((result) => {
    const weather = result.data.weather[0].description;
    console.log(
      `it is now ${result.data.main.temp} in ${result.data.name}, ${result.data.sys.country}`
    );
    console.log(`the current weather conditions are: ${weather}`);
    // console.log(result.data);
  })
  .catch((error) => console.error(error));

//convert kelvin results to celcius => need to add this: &units=metric (add it to the end of the url )
