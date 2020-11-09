const express = require('express')
const app = express();
const data = require('./data.json')



const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

app.get('/api/flyers', (req, res) => {
    res.set('Content-Type', 'text/json')
    res.json(data)
})


app.set('port', process.env.PORT || 4000)
app.listen(app.get('port') ,() => console.log(`Server running on port `+ app.get('port')))