const axios = require("axios");
var cors = "https://cors-anywhere.herokuapp.com/";
const APIKEY = "AIzaSyCZGl5xRRXsZcx3O3C4-YyfYT9jZVP5AVw";
const currentLocation="%20Chicago"
const inputType = "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry";
const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";

function search(query) {
    query = query.split(" ").join("%20");
    return axios.get(cors + BASEURL + query + currentLocation + inputType + "&key=" + APIKEY);
}
export default search;