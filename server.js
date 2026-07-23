const express = require("express");
const cors =require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/weather", async (req, res) => {
    try {
        const response = await fetch("https://www.rainviewer.com/api/weather-maps.json");
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});