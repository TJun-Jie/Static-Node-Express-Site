const express = require('express');
const data = require('./public/data.json');


const app = express();

const router = require('./routes/mainRoutes');
app.set('view engine' , 'pug');
app.use('/static', express.static('public'))

app.use(router)







const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port} at localhost:${port}`)
})
