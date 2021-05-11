require('dotenv').config()
const cors = require('cors')
const express = require ('express');
const router = require ('./router');
const db = require ('./db');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors())
app.use(router)




// Get res in localhost
app.get('/', function (req, res) {
  res.send('Hello world!')
})



// Start server
db.then(() => {
  app.listen(process.env.PORT || port, () => {
      console.log(`Server app listening at port: ${port}`);   
  });
}).catch((err)=>console.log(err.message));