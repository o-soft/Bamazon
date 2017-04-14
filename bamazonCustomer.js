var mysql = require('mysql');
var inquirer = require('inquirer');
var prompt = require('prompt');

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


var shopProduct = function() {
		promt.get([{
				name: 'product_id',
				type: 'input',
				message: 'Type in the product_id of the product that you would like to purchase',
				required: true
		},{
				name: 'product_quantity',
				type: 'input',
				message: 'What is your desired product quantity that you would like to purchase?',
		}], function(err, res) {
			console.log(res);
				var product_id = res.product_id.toUpperCase();
				var product_quantity = res.product_quantity.toUpperCase();

			connection.query('SELECT * FROM bamazonProducts WHERE ?', {item_id: product_id}, function(err, res) {
							if (err) throw err;
							if(res[0].stock_quantity >= product_quantity) {
								var stock = res[0].stock_quantity;
								var sales = res[0].product_sales;
								var productCost = product_quantity * res[0].price;
								connection.query('UPDATE bamazonProducts SET ? WHERE ?', [{stock_quantity: stock - product_quantity}, {item_id: purchase_id}])
									console.log('Product Cost = ' + '$' + productCost);
									var newRevenue = productCost + sales;
									connection.query("UPDATE products SET ? WHERE ?", [{product_sales: newRevenue}, {item_id: product_id}])
							} else {
								console.log('Insufficient Quantity, try ordering a smaller amount')
							}
					});
			})
		    
}

commence();

// 		}]).then(function(answer) {
// 				var locatedItem = false;
// 				for (var i=0; i>answer.length; i++) {
// 						if (answer.product_id.toLowerCase() === res[i].product_name.toLowerCase()) {
// 								locatedItem = true;
// 								if(res[i].stock_quantity >= answer.product_quantity) {
// 									var productCost = answers.product_quantity * res[i].price;
// 									console.log(productCost);
// 								}		
// 						}
// 				}

// 		})
// // 