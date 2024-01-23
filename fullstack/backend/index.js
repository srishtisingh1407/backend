
import express from 'express'
const app = express();
app.get('/',(req,res)=> {
    res.send('running')
});
app.get('/sris',(req,res)=>{
    res.send('okay and')
})
app.get('/jokes',(req,res)=>{
    const jokes =[ //use jason formatter to decode the data given, how to read api formally
        {
            id :1,
            title: 'A joke',
            content:'this is a joke'
        },
        {
            id :2,
            title: 'A joke',
            content:'this is a joke'
        },
        {
            id :3,
            title: 'A joke',
            content:'this is a joke'
        },
        {
            id :4,
            title: 'A joke',
            content:'this is a joke'
        },
        {
            id :5,
            title: 'A joke',
            content:'this is a joke'
        },
    ]
    res.send(jokes);
})


const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server at ${port}`);
});









































// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
