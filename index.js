const express = require('express')

const app = express();

const PORT  = 3000;

const friends =[
    {
        id : 0,
        name : "Dr. APJ Abdul Kalam"
    },
    {
        id : 1,
        name : "Sir Issac Newton"
    },
    {
        id : 2,
        name : "C V Raman"
    }
]

app.get('/friends',(req, res)=>{

  res.json(friends)
})

app.get('/friends/:friendId',(req, res)=>{

    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]

    if(friend){
        res.json(friend)
    }else{
        res.status(404).json({
            error : "Friend Doesn't Exist"
        })
    }
  })


app.listen(PORT ,()=>{
    console.log(`SERVER is  Listining on ${PORT} ....`);
})