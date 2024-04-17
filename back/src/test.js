import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Chole!!!')
})

// route for handling dynamic user IDs
app.get('/users/:userId', (req, res) => {
    // Extract the user ID from the URL parameters
    const userId = req.params.userId;
    res.send(`Hello Chole, This is User ${userId}!!`);
})
// route for handling search with query parameters
app.get('/search', (req, res) => {
    // extract the search query from the request's query parameters
    const query = req.query.q;
    res.send(`Search Results for: ${query}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})