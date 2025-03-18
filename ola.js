document.getElementById("calculateFareBtn").addEventListener("click", function() {
    const passengers = document.getElementById("passengersInput").value;

    if (!passengers || passengers <= 0) {
        alert("Please enter a valid number of passengers!");
        return;
    }

    fetch("http://localhost:5000/calculate-fare", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ passengers: parseInt(passengers) })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("fareResult").innerHTML = 
            `Total Fare: ₹${data.totalFare} <br> 
             Shared Fare per Passenger: ₹${data.sharedFare}`;
    })
    .catch(error => console.error("Error:", error));
});