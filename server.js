const express = require('express');


const host = '0.0.0.0';
const port = 3003;

const app = express();
app.listen(port, host)
console.log('Hello world! \n Web server running at http://%s:%s',host,port );
app.get('/', (req, res) => {
  res.send('Hello World!');
});
