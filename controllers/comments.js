let express = require('express')
let db = require('../models')
let router = express.Router()

//POST /comments route to add comment to an article

router.post('/', (req, res) => {
    db.comment.create({

    })
    .then((comment) =>{
        res.redirect('/articles/:id')
    })
    .catch((error) => {
        res.status(400).render('main/404')
      })
})

router.get('/', (req, res) => {
    res.send('THIS IS THE COMMENT POST ROUTE')
})


module.exports = router