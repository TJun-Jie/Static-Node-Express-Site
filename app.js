const express = require('express');
const data = require('./public/data.json');
const app = express();
const router = require('./routes/mainRoutes');

app.set('view engine' , 'pug');

// set static route in the public directory
app.use('/static', express.static('public'))

// link main routes to app.js
app.use(router)

// 404 error if no route is found
app.use((req, res , next) => {
    const err =  new Error('Sorry page could not be found')
    err.status = 404;
    // pass error to global error handler
    next(err)
})

// Global error handler
app.use( (err, req, res, next) => {
    // catch other errors other than 404
    if(!err.status) {
        err.status = 500;
    }
    res.status(err.status);
    // Render error page
    res.render('error', {err: err})
})

const port = 3000;
// Starts a server and listen on port 3000 locally
app.listen(port, () => {
    console.log(`App listening on port ${port} at localhost:${port}`)
})
