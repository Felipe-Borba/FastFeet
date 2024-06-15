const express = require("express");
const cors = require("cors");

// Index das routes
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

const PORT = process.env.PORT ?? 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
