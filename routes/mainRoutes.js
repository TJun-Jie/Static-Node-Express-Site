const express = require('express');
const projects = require('../public/data.json').projects;


const router = express.Router();

// index route
router.get('/', (req, res)  => {
    res.render('index', {projects})

})

// about route
router.get('/about',  (req, res) => {
    res.render('about')
})

// Projects route
router.get('/projects/:id',  (req, res,next) => {
    const id  = req.params.id
    if(projects[id]) {
        res.render('project', {projects: projects, id: id})
    } else {
        const err =  new Error('Sorry project could not be found')
        err.status = 404;
        // pass error to global error handler
        next(err)
    }
})


// export this route to app.js
module.exports = router;