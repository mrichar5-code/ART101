let count = 0; 
let places=["Vegas", "Texas", "Washington", "San Diego", "Nevada", "California", "Maine", "Maryland", "Oregon", 
    "Arizona", "New York", "Santa Cruz", "Montana", "North Carolina", "Tennessee", "Idaho", 
];
let placesCount = 0;

let environmentTitle = "The Roadtrip That Keeps Going";

let buttonCreature = {
    name: "mileage button",
};

let environmentElements = ["asphalt", "warm breeze", "music", "truck"];

let mainEntity = {
    name: "truck",
    type: "soft border",
    mood: "welcoming",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#mileage-button").click(function () {

    count = count + 100; 
    let arrayPosition = count - 100;

    let message = "<p>You have driven " + count + " miles.</p>";


    $("#environment-output").html(message);

    console.log(count);
    console.log(arrayPosition);

});

$("#where-to").click(function () {

    $("#where-to").html("You are on your way to: " + places[placesCount]);
    placesCount++;

    if (placesCount >= places.length) {
        placesCount = 0;
    }

    console.log(placesCount);

});

function askWeather() {
    let userNumber = prompt("What temperature is it outside?");
    userNumber = Number(userNumber);

    if (userNumber > 95) {
        $("#output").html("Roll up the windows and blast the A/C!");
    } else {
        $("#output").html("Keep the windows down and feel the breeze!");
    }
}

$("#weather-button").click(function () {
    askWeather();
});

$("#weather-button").click(function () {
    console.log("button clicked");
});







