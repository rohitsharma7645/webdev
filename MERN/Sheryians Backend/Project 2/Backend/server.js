import app from "./src/app.js";
import 'dotenv/config'
import connectDB from "./config/db.js";

connectDB()

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})