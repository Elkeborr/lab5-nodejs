
// contact leggen met models => message
const message = require('../models/message');




// GET
let get = ('/messages',(req,res,next)=>{
  res.json({
      "status": "YES 🤯",
     "message":"GETTING messages"
    })
  

    
    });

module.exports.get=get;

// GET:ID

let getid = ('/messages/:id',(req,res,next)=>{
  //const id = message.find(req.params.id);

 
  res.json({
    "status": "YES 🤯",
      "messages": "GETTING message with ID "  //+ req.params.id
    
  })

  
  });

module.exports.getid=getid;

// POST
let post = ('/messages',(req,res,next)=>{
    // variabele maken van de user en de tekst dat gestuurd worden
    let text = req.body.text;
    let user = req.body.user;
    console.log(text);
    
    // deze in een nieuwe message zette
    let m =new message();
    m.text =text;
    m.user = user;
    m.save();
    
    res.json ({
      "status":"YES ✉️",
      "message": "user: " +req.body.user + " text: " + req.body.text
      
    })
    });

module.exports.post=post;

//PUT

let put =('/messages/:id',(req,res)=>{

//const id = message.find(req.params.id);

let nieuw_text = req.body.text;
let user = req.body.user;

    res.json ({
      "status":"YES 📤",
      "messages": "UPDATE message with ID "  //+ req.params.id
    })
   
});
module.exports.put=put;

//DELETE

let remove =('/messages/:id',(req,res)=>{

  //const id = message.find(req.params.id);

  res.json ({
    "status": " ❌ success", 
    "message": "DELETING a message with ID " //+ req.params.id
  });


    
});
module.exports.remove=remove;


//GET-USERNAME

let getUsername =('/messages?user=pikachu',(req,res)=>{

  const username = message.find(req.params.user);


  res.json ({
    "status": " 🐥 success", 
    "message": "GETTING message for pikachu " //+ req.params.user

  });


    
});
module.exports.getUsername=getUsername;