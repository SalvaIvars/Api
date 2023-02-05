const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
mongoose.set('strictQuery', true); 

try{
  mongoose.connect('mongodb+srv://salva:salva@cluster0.ltqsk2i.mongodb.net/api?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex:false },
    () => console.log("Mongoose is connected"));
}catch(e){
  console.log("Could not connect");
}

const app = express();
const PORT = 8080;

const userRoutes = require("./routes/userRoutes");
const publicationsRoutes = require("./routes/publicationsRoutes")
const commentsRoutes = require("./routes/commentsRoutes")
const authRoutes = require("./authentication/authRoutes")

app.use(express.json({limit:'50mb'}));
app.use(bodyParser.json())
app.use("/users", userRoutes);
app.use("/publications", publicationsRoutes);
app.use("/comments", commentsRoutes)
app.use("/auth", authRoutes)


app.listen(PORT, () => {
    console.log('Servidor web iniciado')
});