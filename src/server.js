import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  console.log(req)
};

app.get("/", handleHome);

const handleListening = () => console.log(`Server listenting on ports84`);

app.listen(PORT, handleListening);

