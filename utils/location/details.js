/**
 *
 * @author Karl-Johan Bailey
 * @created 06/12/2022
 * @desc Make call to API and return object with country, city...
 * @param { Number } longitude
 * @param { Number } latitude
 * @returns { Object } location object
 *
 * TODO Add backend API call for location using node-geocode
 */

async function getLocationDetails(longitude, latitude) {
  let location = {
    city: "",
    country: "",
  };

  return location;
}

export default getLocationDetails;
