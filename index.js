import express from "express";
import axios from "axios";
 const app= express();
 const PORT= 3000;

 const API_URL= "https://programming-quotesapi.vercel.app/api";
app.use(express.static("public"));
app.set('view engine', 'ejs');  

app.get("/", async(req, res) =>{
    try{
        const response= await axios.get(`${API_URL}/random`);
        res.render("index.ejs", { content: response.data});
    } catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});
 



 app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
 })