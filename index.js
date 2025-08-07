import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/Education", (req, res) => {
    res.render("Education.ejs");    
});
app.get("/Experience", (req, res) => {
    res.render("Experience.ejs");   
});
app.get("/Contact", (req, res) => {     
    res.render("Contact.ejs");    
});
app.get("/GamesProjects", (req, res) => {
    res.render("GamesProjects.ejs");
});
app.get("/WebProjects", (req, res) => {     
    res.render("WebProjects.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});