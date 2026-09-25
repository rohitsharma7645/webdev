import app from "./src/app.js";
import connectDB from "./config/db.js";

connectDB();

app.listen(3000,()=>{
    console.log('Server running on 3000')
})