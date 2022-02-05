const connect = require("./config/db");

const app = require("./controllers/signup");



app.listen(2345,()=>{
     connect();
     console.log("listening");
});