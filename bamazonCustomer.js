var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'bamazon_db',
});

connection.connect(function(err) {
		if(err) throw err;
		commence();
});


var commence = function() {
		connection.query('SELECT * FROM bamazonProducts', function(err, res) {
				for (var i=0; i<res.length; i++) {
						if (res[i].stock_quantity > 0) {
							console.log('ID: ' + res[i].item_id + ' | ' + 'Product: ' + res[i].product_name + ' | ' + 'Price: ' + '$' + res[i].price);
						}

				}

				shopProduct();
		})
};


// var shopProduct = function(res) {
// 		inquirer.promt([{
// 				name: 'product_id',
// 				type: 'input',
// 				message: 'What product would you like to purchase?',
// 				required: true
// 		},{
// 				name: 'product_quantity',
// 				type: 'input',
// 				message: 'What is your desired product quantity that you would like to purchase?',
// 				required: true
// 		}]).
		    
// }