import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";


mongoose.connect(process.env.MONGO)
.then( () => {
    console.log(' Mongo db connected');
})
.catch( (err) => {
    console.log(err);
});


const app = express();

app.listen(3000, () => {
    console.log('server is running port 3000');
} 
);

app.use('/api/user', userRouter);

// app.get('/test', (req, res) => {

//     res.json({ 
//         msg: "Hello Sharvaya",
//     });

// });



