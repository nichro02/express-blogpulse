var db = require('./models')
//TEST COMMENT
/*
db.comment.create({
  name: 'Paul Allen',
  content: 'This is really neat! Thanks for posting.',
  articleId: 1
})
.then(function(comment) {
  console.log(comment.get())
})
*/

//TEST ARTICLE
/*
db.article.create({
  title: 'TEST ARTICLE',
  content: 'Testing 1-2',
  articleId: 1
})
.then(function(article) {
  console.log(article.get())
})
*/

db.article.findOne({
    where: { id: 1 },
    include: [db.comment]
  }).then(function(article) {
    // by using eager loading, the article model should have a comments key
    console.log(article.comments)
  })
 
