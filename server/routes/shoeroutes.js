const express = require('express');
const router = express.Router();
const shoe = require('../models/shoeModel');



// REGISTER new user into joyn

router.post('/add',
    (req, res) => {
                        console.log(req.body);

       
                if (!req.body) {
                                            if (err.name === 'MongoError' && err.code === 11000) {
                                                console.log(err);
                                                res.status(401).json({
                                                    msg: "could not insert",
                                                field: err.keyValue
                                            });
                                        } else {
                                            res.status(401).json(err);
                                        }


                    }
             
              else {

                        const userPersonalDetails = req.body;

                        shoe.create(userPersonalDetails, (err, data) => {
                            if (err) {
                                if (err.name === 'MongoError' && err.code === 11000) {
                                    console.log(err);
                                    res.status(401).json({
                                        msg: "field not inserted yet",
                                        field: err.keyValue
                                    });
                                } else {
                                    res.status(401).json(err);
                                }
                            } else {
                                res.status(200).json({ msg: "shoe field added  successfully", details: data });
                            }
                        })


                    }
    });




//for update
router.post('/update',
(req, res) => {

   
    
    const { userid } = req.body;
    shoe.find({ _id: userid }, (err, data) => {
        console.log(data);
     
        if(err) {
                            console.log("finding one");
                            console.log(err+"this is first error");
                            res.status(401).json({
                                error: "shoe  doesn't exist",
                                details: err
                            });
                        }
        else {
                    console.log(data[0]);
                    console.log("finding id")
                    shoe.findOne({_id:data[0]._id}, (err, data2) => {
                        // if(err){
                        //     res.send.json({message:"findone shoe error"});
                        // }
                        console.log("data 2");
                        console.log(data2);
                        if (data2) {
                            console.log("entered suc");
                            data2.Name = req.body.Name
                            data2.Price = req.body.Price
                            data2.Quantity = req.body.Quantity
                            data2.Material = req.body.Material
                           
                            console.log("data updated sucessfully")



                            
                                  // upadting the data in the customer table
                                    // data2.customername=req.body.customername
                                    data2.save()
                                    .then(()=>{
                                        return res.status(200).json({
                                            success:true,
                                            id:data2[0]._id,
                                            message:'shoe updated'
                                        })
                                    })  
                                    .finally(()=>{
                                        return res.status(200).json({
                                            success:data2._id,
                                            message:"updated successfully"
                                        })
                                    })
                                    


                                
                            }//if


                        }); //findone 
      
                        }//else

                    })//find
                });//router
//update finished

                
                

//deleter
router.post('/delete',
(req, res) => {

    console.log('req', req.body);
    // const errors = validationResult(req);
    
    
    
    
    const { userid } = req.body;
    shoe.find({ _id: userid }, (err, data) => {
                        if (err) {
                            console.log(err);
                            res.status(401).json({
                                error: "csutomer doesn't exist",
                                details: err
                            });
                        }
                    else  if (data.length == 0) {
                            console.log(err);
                            res.status(401).json({ error: "customer doesn't exist" });
                        } 
        else {
                    console.log(data[0]);
                    UserDetailsModel.remove({_id:data[0]._id},{justOne:true}, (err, data2) => {
                        if (data2) {
                           res.status(200).json({
                               msg:"data removed successfully",
                           }) 
                        }

                    }); 
      
                        } 
                    })
});





// get
router.get('/get',
(req, res) => {

    console.log('req', req.body);
    // const errors = validationResult(req);
    
    
    
    
    const { userid } = req.body;
    shoe.find({ _id: userid }, (err, data) => {
                        if (err) {
                            console.log(err);
                            res.status(401).json({
                                error: "csutomer doesn't exist",
                                details: err
                            });
                        }
                    else  if (data.length == 0) {
                            console.log(err);
                            res.status(401).json({ error: "customer doesn't exist" });
                        } 
        else {
                        res.status(200).json({data})
      
                        } 
                    })
});
    
module.exports = router;





 
                          

