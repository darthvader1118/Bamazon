var mysql = require('mysql');
var prompt = require('prompt');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "1234", //Your password
    database: "bamazon"
})

// connection.query("SELECT * FROM Products;",function(err,res){
//   if(err) throw err;
//   console.log(res);
// });

// connection.connect()

prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['item', 'quantity'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  What item would you like? ' + result.item);
    console.log('  How many of such item? ' + result.quantity);
    console.log(result.item)
   connection.query('SELECT price,StockQuantity FROM Products WHERE ?',[{ProductName: result.item}], function(err, res){// put callback
    if(err) throw err;

    console.log(res[0].price);
    var newQuant = res[0].StockQuantity - result.quantity;
    if(newQuant < 0){
      console.log("Insufficient Quantity");
    }
    else{
      connection.query('UPDATE Products SET ? WHERE ?',[{StockQuantity: newQuant},{ProductName: result.item}], function(err, res){
        console.log("you took " + result.quantity + " " + result.item)
        console.log('total price is ' + result.quantity*res[0].price);
      })
      connection.end();
    }
});
  });

