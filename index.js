// const https = require('https');
const http = require('http');
const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


// Environment variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;


// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
});

// get request for route
app.get('/', (req, res)=>{
    res.send("Assignement Server is Running...");
});

// Status Monitor
app.use(require('express-status-monitor')());



app.listen(PORT, ()=>{
  console.log(`Server Listening on http://localhost:${PORT}`);

});


// // Create HTTP server
// const server = http.createServer(app);

// // Create server
// server.listen(PORT, IP_ADDRESS, () => {
//   console.log(`Server Listening on http://${IP_ADDRESS}:${PORT}`);
// });
