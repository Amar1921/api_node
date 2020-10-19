const express = require('express')
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const data = require('./data.json')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

app.get('/api/flyers', (req, res) => {
    res.set('Content-Type', 'text/json')
    res.json(data)
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))