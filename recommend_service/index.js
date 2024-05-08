const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
 
const app = express();
const apiPort = 6004;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/api', (req, res) => {
    res.send('Hello World! - from recommend service');
})
 
 
app.post("/api/recommend", (req, res) => {
  //
  const message = req.body.message.toLowerCase();
 
  if(message=="cv" )
    res.status(200).json({ messageLength: "https://www.cvmaker.com"});

  else if (message=="picture")
    res.status(200).json({ messageLength: "https://www.lightxeditor.com"});

  else if (message=="salary"||message=="money")
    res.status(200).json({ messageLength: "https://www.upwork.com"});

  else if (message=="skill"||message=="skills")
    res.status(200).json({ messageLength: "https://skillsbuild.org"});  
  //

});
 
 
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
