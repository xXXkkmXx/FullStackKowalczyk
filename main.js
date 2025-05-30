const express = require('express')
const app = express()

const Blog = require('./models/blog')
const Mongo = require('./mongo/mongo')

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', async (request, response) => {

  const {title,author,url,likes} = request.body;

  if(!title || !author || !url){
    return response.status(400).json({error: "Title, author and url are required"});
  }

  const blog = new Blog({
    title: title,
    author: author,
    url: url,
    likes: likes || 0
  })

  try{
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  }catch(error){
    response.status(500).json({error:"Can't add a blog"});
  }
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})