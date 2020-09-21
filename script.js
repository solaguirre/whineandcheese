googleMapsAPIKey = "AIzaSyAKeud47fDrKKEOtY9UDxjp4tcM5qx9ZVE";
geoDataSourceAPI = "";
geoCodioAPIKey = "11f688a2bb8200b2fa8768d2a051d225fd56868";
exchangeRateAPIKey = "3d1b0462d3f12a057c13eb57";

exchangeURL = "https://v6.exchangerate-api.com/v6/" + exchangeRateAPIKey + "/latest/USD"



// When the user starts they will enter in the name of their destination.




// After they enter in the destination we will use their input to request information from GeoCod.io to get the coordinates of their destination. 





// Using the coordinates of their destination as search criteria for GoogleMaps' API we will request the map of the destination.





// Using the name of the destination we will also send a request to the Currency Exchange API for the current exchange rate assuming US dollars(maybe have option to choose original currency.)






// The exchange rate of 1USD to local currency will be displayed.







// Time providing we will then also provide the user with an idea of what they can expect to spend on common goods, such as gallon of gas/milk, A big Mac, and maybe something else entertainment based(can only think of movies of the top but thats not terribly relevant rightnow).








