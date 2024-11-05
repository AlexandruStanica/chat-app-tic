const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./firebase-config/dbConfig");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.get("/", async (req, res) => {
    const confirmMessage = await db.collection("messages").add({"alex": "Salutare"});
    res.send(confirmMessage.id);
});
app.post("/", async (req, res) => {
    console.log(req.body);
    const {text, timestamp = Date.now()} = req.body;
    const confirmMessage = await db.collection("messages").add({text, timestamp});
    res.send(confirmMessage.id);
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));