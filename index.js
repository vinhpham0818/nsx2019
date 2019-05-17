const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/api/getList', (rep, res)=> {
    res.json(['a', 'b', 'c'])
})
app.get('/', (req, res) => {
    res.render('index', {
        user: {
            name: 'pham hien vinh'
        },
        users: ['apple', 'samsung', 'nokia']
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))