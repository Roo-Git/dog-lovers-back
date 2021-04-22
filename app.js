const express = require ('express');
const router = require ('./router');
const db = require ('./db');
const app = express();
const port = 3000;



// Get res in localhost
app.get('/', function (req, res) {
  res.send('Hello world!')
})



// Middleware
app.use(express.json());
app.use(router)



// Start server
db.then(() => {
  app.listen(port, () => {
      console.log(`Server app listening at http://localhost:${port}`);   
  });
}).catch((err)=>console.log(err.message));