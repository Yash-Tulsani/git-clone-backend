const express=require('express');
const router=express.Router();

const chatControllers = require('./controllers/chatControllers');

// Get Routes


// Post Routes
router.post("/chat/reply", chatControllers.getMessageReply)

// Put Routes


// Delete Routes


module.exports=router;