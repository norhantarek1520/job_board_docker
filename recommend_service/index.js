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
 
 
//task2
app.post("/api/recommend", (req, res) => {
        //
        const message = req.body.message;
       
        if(message=="CV"||message=="cv"||message=="Cv"||message=="cV")
          res.status(200).json({ messageLength: "https://www.cvmaker.com"});
 
        else if (message=="Picture"||message=="picture"||message=="PICTURE"||message=="Photo"||message=="image")
          res.status(200).json({ messageLength: "https://www.lightxeditor.com"});
 
        else if (message=="Salary"||message=="salary"||message=="SALARY"||message=="money")
          res.status(200).json({ messageLength: "https://www.upwork.com"});
 
        else if (message=="Skill"||message=="Skills"||message=="skill"||message=="SKILL")
          res.status(200).json({ messageLength: "https://skillsbuild.org"});  
        //
 
  });
 
 
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
