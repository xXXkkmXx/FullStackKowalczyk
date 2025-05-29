const express = require('express')
const mongoose = require('mongoose')

const app = express()

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb+srv://jamax382:DTHAdOrm0jYpnsWi@fullstackproject.4xxwf.mongodb.net/BlogBased?retryWrites=true&w=majority&appName=FullstackProject'
mongoose.connect(mongoUrl).then(()=>{console.log("mongo connected correctly")})

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const content = request.body;
  const blog = new Blog(content);

  blog.save().then((result) => {
    response.status(201).json(result)
  })
  .catch((err)=>{
    response.status(500).json({error:'failed to post a blog'})
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})