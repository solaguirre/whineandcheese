let googleMapsAPIKey = "AIzaSyAKeud47fDrKKEOtY9UDxjp4tcM5qx9ZVE";
// let geoDataSourceAPI = "";
let geoCodioAPIKey = "11f688a2bb8200b2fa8768d2a051d225fd56868";
let exchangeRateAPIKey = "3d1b0462d3f12a057c13eb57";
let destination = "Tucson, AZ";
let geoCodioURL = "https://api.geocod.io/v1.6/geocode?q=" + destination + "&api_key=" + geoCodioAPIKey;
let exchangeURL = "https://v6.exchangerate-api.com/v6/" + exchangeRateAPIKey + "/latest/USD"
let userSearch = "";
let latitude = 0;
let longitude = 0;
// exchange rate AJAX call consoles out repsonse
$.ajax({
    url: exchangeURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// this consoles out the response for the location searched
$.ajax({
    url: geoCodioURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// based on the call I made just using Tucson, AZ we may be able to reference the lat and long by going results.input.results.0.location[0] for the lat and for the long results.input.results.0.location[1](this may require more digging and checking for consistency to the same results but geoCod.io says that they always list the closest result to the search query at the top of the response.)


// When the user starts they will enter in the name of their destination. (Might want to use the search box we are using for hw6 for this part) 




// After they enter in the destination we will use their input to request information from GeoCod.io to get the coordinates of their destination. (if response consistently returns the same pathing to the lat and long then we are golden and will just need to change the variables for latitude and longitude to equal the response.)




// Using the coordinates of their destination as search criteria for GoogleMaps' API we will request the map of the destination.
// (https://www.google.com/maps/embed/v1/MODE?key=YOUR_API_KEY&parameters) this should generate a map based on the information in googles API key. (information on MODE and parameters can be found at this link https://developers.google.com/maps/documentation/embed/get-started#optional_parameters)

let place = "https://www.google.com/maps/embed/v1/streetview?key=" + googleMapsAPIKey + "&location=" + latitude + "," + longitude + "&heading=210&pitch=10&fov=35"

$("iframe").attr("src", place);
console.log(place)




// Using the name of the destination we will also send a request to the Currency Exchange API for the current exchange rate assuming US dollars(maybe have option to choose original currency.)






// The exchange rate of 1USD to local currency will be displayed.







// Time providing we will then also provide the user with an idea of what they can expect to spend on common goods, such as gallon of gas/milk, A big Mac, and maybe something else entertainment based(can only think of movies of the top but thats not terribly relevant rightnow).








