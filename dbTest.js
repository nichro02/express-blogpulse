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
/*
db.article.create({
    title: 'NEW ARTICLE',
    content: 'Hello, world',
    authorId: 1
  })
.then(function(article) {
    console.log(article.get())
})
*/
/*
db.author.create({
    firstname: 'Bob',
    lastname: 'Ross',
    bio: 'I enjoy painting soothing landscapes and writing zen code'
})
.then(function(author) {
    console.log(author.get())
})
*/
/*
db.author.create({
    firstname: 'Steve',
    lastname: 'Jobs',
    bio: 'Writing from the cloud'
})
.then(function(author) {
    console.log(author.get())
})
*/
/*
db.comment.create({
    name: 'John Doe',
    content: 'test comment',
    articleId: 4
})
.then(function(comment) {
    console.log(comment.get())
})
*/
/*
db.article.findOne({
    where: { id: 1 },
    include: [db.comment]
  }).then(function(article) {
    // by using eager loading, the article model should have a comments key
    console.log(article.comments)
  })
 */
