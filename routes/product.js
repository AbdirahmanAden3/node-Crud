const express = require('express')
const connection = require('../connection')
const router = express.Router()
const auth =  require('../services/authentication')
const checkRole = require('../services/checkRole')




router.post('/add',auth.authenticateToken,(req,res)=>{
    let product = req.body;
    query = "INSERT INTO product(name,categorgyid,description,price,status) values(?,?,?,?,'1')"
    connection.query(query,[product.name,product.categorgyid,product.description,product.price,],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "produt Added Seccussfuly"})
        }
        else{
            return res.status(500).json(err)
        }
    })
});

router.get('/get', (req,res)=>{
    // let query = "select p.id,p.name,p.description,p.status,c.id as categoryid,c.name as categoryName from product as p JOIN category as c  where p.categorgyid=c.id ";
      let query = "select * from product"
      console.log(query);
      
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }

        else{
            return res.status(500).json(err)
        }
    })
});
// router.get('/getByid/:id',(req, res)=>{
//     const id = req.params; // Extract id from URL params
//     let query = `
//         SELECT p.id, p.name, p.description, p.status, 
//                c.id as categoryid, c.name as categoryName 
//         FROM product AS p 
//         INNER JOIN category AS c 
//         ON p.categorgyid = c.id 
//         WHERE p.id = ?
//     `;
//     connection.query(query,[id],(err, results) => {
//         if (!err) {
//             return res.status(200).json(results);
//         } else {
//             return res.status(500).json(err);
//         }
//     });
// });

router.get('/getByCategory/:id',auth.authenticateToken,(req,res, next)=>{
    const id = req.params.id;
    console.log(id);
    
    let query = "select id, name, description,price from product where id = ?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            return  res.status(200).json(results[0])
        }
        else{
            return res.status(500).json(err);
        }
    })

});
// router.get('/getByCategory/:id', auth.authenticateToken, (req, res, next) => {
//     const { id } = req.params;  // Extract id from route parameters
//     let query = "SELECT id, name, description, price FROM product WHERE id = ?";

//     connection.query(query, [id], (err, results) => {
//         if (!err) {
//             if (results.length > 0) {
//                 return res.status(200).json(results[0]);  // Return the first result if available
//             } else {
//                 return res.status(404).json({ message: "Product not found" });  // Handle case when no product is found
//             }
//         } else {
//             return res.status(500).json(err);  // Send server error if query fails
//         }
//     });
// });


router.patch('/update', (req, res) => {
    let product = req.body;
    // Corrected SQL query with proper spacing
    let query = "UPDATE product SET name = ?, categorgyid = ?, description = ?, price = ? WHERE id = ?";


    // Execute query with parameters
    connection.query(query, [product.name, product.categorgyid, product.description, product.price, product.id], 
        (err, results) => {
            if (!err) {
                if (results.affectedRows == 0) {
                    return res.status(404).json({ message: "Product ID not found" });
                }
                return res.status(200).json({ message: "Product updated successfully" });
            } else {
                return res.status(500).json(err); // Return error status for server/database errors
            }
        }
    );
});




// router.delete('/delete/:id',(req, res, next) => {
//     const id = req.params.id;
//     // Corrected SQL query
//     let query = "DELETE FROM product WHERE id = ?";
//     // Execute the query
//     connection.query(query,[id],(err,results)=>{
//         if(!err){
//             if(results.affectedRows == 0){
//                 return res.status(404).json({ message:  "Product ID not found" });
//             }
//             return res.status(200).json({message: "Product deleted successfully" });
//         } else{
//             // Proper error handling
//             return res.status(500).json({error: "Database error"});
//         }
//     });
// });

router.patch('/updateStatus',(req,res)=>{
    let user = req.body;
    var query = "update product set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
            return res.status(404).json({message:"product id does not found"})
            }
            return res.status(200).json({message:"product updated succesfully"})
        }
        else{
            return res.status(500).json(err)
        }
    })
})



module.exports = router;

