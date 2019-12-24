//server.js

//importing the necessary modules to use in the website
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3480;


//The class 'Schedule' which has the fields teacher and subject

class Schedule {

    constructor(teacher,subject,room,date) {
        this.teacher = teacher;
        this.subject = subject;
        this.room = room;
        this.date = date;
    }
}


// Where we will keep schedules after they are sent to the server
let schedules = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handles the get requests coming to the root url
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html'));
});
//handles the post requests sent to the server's schedule url.
app.post('/schedule', (req, res) => {
    const data = req.body;

    schedule=new Schedule(data.teacher,data.subject,data.room,data.date);

    // Output the schedule to the console for debugging
    console.log(schedule);
    //When a schedule is posted it is added to the schedules array
    schedules.push(schedule);
    //Serves the index.html file to the browser
    //res.sendFile(path.join(__dirname+'/src/index.html'));
    res.redirect('localhost:3480');
});
//handles the get requests sent to the server
app.get('/schedules', (req, res) => {
    //returns the schedules array in JSON format
    res.json(schedules);
});

//serves the styles
app.get('/styles', (req, res) => {
    //returns the schedules array in JSON format
    res.sendFile(path.join(__dirname+'/src/styles/css/main.css'));
});

//serves the javascript
app.get('/javascript', (req, res) => {
    //returns the schedules array in JSON format
    res.sendFile(path.join(__dirname+'/src/js/functions.js'));
});
app.get('/javascript2', (req, res) => {
    //returns the schedules array in JSON format
    res.sendFile(path.join(__dirname+'/src/js/main.js'));
});

app.listen(port, () => console.log(`Commerce site is listening on port: ${port}!`));


