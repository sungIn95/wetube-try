import express from "express";
import { application } from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res ) => console.log("home");

app.get("/", );


const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

