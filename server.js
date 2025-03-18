const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());  // ✅ Allows JSON parsing (important!)

app.post("/calculate-fare", (req, res) => {
    console.log(req.body);  // ✅ Debug: Check what data is coming from Postman

    const { passengers } = req.body;

    if (!passengers || passengers <= 0) {
        return res.status(400).json({ error: "Invalid number of passengers" });
    }

    const baseFare = 80;
    const distance = 3;
    const sharedFare = (baseFare / passengers).toFixed(2);

    res.json({ totalFare: baseFare, sharedFare, distance });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});