let express = require('express')
let db = require('../models')
let router = express.Router()

//POST /comments route to add comment to an article

router.post('/', (req, res) => {
    //console.log(req.body)
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        articleId: parseInt(req.body.articleId)
    })
    .then((comment) =>{
        res.redirect(`/articles/${req.body.articleId}`)
    })
    .catch((error) => {
        console.log(error)
        res.status(400).render('main/404')
    })
      
})
/*
router.get('/', (req, res) => {
    res.send('THIS IS THE COMMENT POST ROUTE')
})
*/

module.exports = router