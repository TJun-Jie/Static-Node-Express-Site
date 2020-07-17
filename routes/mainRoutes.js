const express = require('express');
const data = require('../public/data.json');


const router = express.Router();

router.get('/', (req, res)  => {
    res.render('index', data)

})

router.get('/about',  (req, res) => {
    res.render('about')
})


router.get('/projects/:id',  (req, res) => {
    const id  = req.params.id
    res.render('project')
})



module.exports = router;