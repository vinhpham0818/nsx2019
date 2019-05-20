const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/assets'))
app.set('view engine', 'ejs')

app.get('/api/getList', (rep, res)=> {
    res.json({
        users: [
        {
            name:'Quyen',
            class: 'PQ-Web-D005'
        },
        {
            name:'Chi Dung',
            class: 'PQ-Web-D005'
        },
        {
            name:'Mai',
            class: 'PQ-Web-D005'
        },
        {
            name:'Mai',
            class: 'PQ-Web-D005'
        }
        ]
    })
})
app.get('/', (req, res) => {
    res.render('index', {
        users: [
            {
                name:'Quyen',
                class: 'PQ-Web-D005'
            },
            {
                name:'Chi Dung',
                class: 'PQ-Web-D005'
            },
            {
                name:'Mai',
                class: 'PQ-Web-D005'
            },
            {
                name:'Mai',
                class: 'PQ-Web-D005'
            }
            ]
        })
        })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))