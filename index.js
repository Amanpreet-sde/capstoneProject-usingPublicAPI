//importing necessary libraries and modules
import express from "express"; //import express framework for building web applications
import axios from "axios"; //imoport axios for making HTTP requests

//implement express application to set up server and handle requests 
const app= express();

//creatre a constant for port number
const PORT= 3000;

//define API url from which quotes will be fetched
 const API_URL= "https://programming-quotesapi.vercel.app/api";

//serve static files from 'public' directory
 app.use(express.static("public"));

//configure the application to use ejs as templating engine
 app.set('view engine', 'ejs');  

 //define a GET route for the root url ("/")
app.get("/", async(req, res) =>{
    try{
        //make asynchronous GET request to the API to get a random progamming quote
        const response= await axios.get(`${API_URL}/random`);
        
        //render the index.ejs file and pass the fetched quote data
        res.render("index.ejs", { content: response.data});
    } catch(error){
        //if there is any error, log the error details
        console.log(error.response.data);
        
        //set the response status to 500 
        res.status(500).send("error fetching quote"); //optionally send an error message to client 
    }
});
 


//start the server and listen to the defined port
 app.listen(PORT, ()=> {
    //log a message to the console when the server is running
    console.log(`server is running on port ${PORT}`);
 })