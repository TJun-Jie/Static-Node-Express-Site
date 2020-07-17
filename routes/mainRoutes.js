const express = require('express');
const projects = require('../public/data.json').projects;


const router = express.Router();

router.get('/', (req, res)  => {
    res.render('index', {projects})

})

router.get('/about',  (req, res) => {
    res.render('about')
})


router.get('/projects/:id',  (req, res) => {
    const id  = req.params.id
    res.render('project', {projects: projects, id: id})
})



module.exports = router;