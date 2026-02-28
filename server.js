import app from "./backend-project/src/app.js";

import coonectDB from "./backend-project/src/config/db.js";
coonectDB()
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server is connected on PORT ${PORT}`);
    
})