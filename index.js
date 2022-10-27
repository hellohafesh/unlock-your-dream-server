const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


const courses = require('./data/courses.json');

const coursesDetails = require('./data/details.json');

app.get('/', (req, res) => {
    res.send('Running')
})



app.get('/courses', (req, res) => {
    res.send(courses);
})



app.get('/coursesDetails/:id', (req, res) => {

    const id = req.params.id;
    const yourCourse = coursesDetails.find(details => details.id === id);
    res.send(yourCourse);
})



app.listen(port, () => {
    console.log(`Our Server ${port}`)
})