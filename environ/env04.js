let count = 0; 
let places=["Vegas", "Texas", "Washington", "San Diego", "Nevada"];
let placesCount;

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

    count = count + 1; 
    let arrayPosition = count - 1;

    let message = "<p>You have driven " + count + " miles.</p>";


    $("#environment-output").html(message);

    console.log(count);
    console.log(arrayPosition);

});

$("#where-to").click(function () {

 placesCount=count-1;
 $("#where-to").html(" You are on your way to: " + places[placesCount]);
 console.log(count);


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







