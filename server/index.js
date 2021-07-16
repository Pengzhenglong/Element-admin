const  express  = require('express')

const  app= express()
app.use(express.json())

app.use(require('cors')())

const  mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
})
const  Article  = mongoose.model('Article',new  mongoose.Schema({
      title:{type:String},
      body:{type:String}
}))

// 展示数据
app.get('/test',async(req,res)=>{
  res.send('index')
})

// 提交数据
app.post('/api/articles',  async(req,res)=>{
  const  article  =await  Article.create(req.body)
  res.send(article)
})
// 展示文章数据
app.get('/api/articles', async(req,res)=>{
  const  article  = await  Article.find()

  res.send(article)
})
app.listen(3000,()=>{
  console.log('http://localhost:3000')
})