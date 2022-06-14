const express=require('express');
const app=express()
const bodyParser=require('body-parser')
const mysql=require('mysql');
const cors=require('cors');
const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'cruddatabase'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

// Connect
  

/* app.get('/',(req,res)=>{
    const sqlInsert="insert into movie_reviews (movieName,movieReview) VALUES ('Babys Day Out','Maxxa');";
    db.query(sqlInsert,(err, result) => {
        if(err){
            console.log(err);
        }
        console.log(result);
        res.send('Insert Done....');
    });
 
}); */

app.get('/api/get',(req,res)=>{
  
    const sqlGet="select * from movie_reviews ;";
    db.query(sqlGet,(err, result)=>{
        console.log(result);
        res.send(result);
    })
})

app.post('/api/insert',(req,res)=>{
    const movieName=req.body.movieName;
    const movieReview=req.body.movieReview;
    const sqlInsert="insert into movie_reviews (movieName,movieReview) VALUES (?,?);";
    db.query(sqlInsert,[movieName,movieReview],(err, result)=>{
        console.log(result);
    })
})

app.listen(3001,()=>{
    console.log('Running 3001');
});