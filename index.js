const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleWares
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('food service server is running')
})

app.listen(port, () => {
    console.log(`Food service server running on port ${port}`)
})