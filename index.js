const DbConnect = require("./database");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
// cors error
const corsOption = {
    credentials:true,
    origin: ["https://taskgiven.netlify.app","http://localhost:3000"],
  };
app.use(cors(corsOption));
app.use(express.json());
app.get("/",(req,res)=>{res.send("hii task")})
app.use(require('./router/routes'));
DbConnect();
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT + "✅");
});