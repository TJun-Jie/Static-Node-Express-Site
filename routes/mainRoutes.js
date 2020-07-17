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
router.get('/projects/:id',  (req, res) => {
    const id  = req.params.id
    res.render('project', {projects: projects, id: id})
})


// export this route to app.js
module.exports = router;