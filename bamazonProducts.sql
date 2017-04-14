
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE bamazonProducts (
	'item_id' INT auto_increment NOT NULL,
'product_name' VARCHAR(100) NOT NULL,
'department_name' VARCHAR(100) NOT NULL,
'price' DECIMAL(10,4) NOT NULL,
'stock_quantity' INT NULL,
'product_sales' DECIMAL(10,2) NOT NULL DEFAULT 0,
PRIMARY KEY (item_id)
);

INSERT INTO bamazonProducts (product_name, department_name, price, stock_quantity)
VALUES ('Peanut Butter', 'food', '2.25', 40),
('Taco', 'Food', '1.15', 100),
('Hair Gel', 'Beuty', '4.10', 40),
('I-Phone 7', 'Electronics', '600', 15),
('Sun Glasses', 'Fashion', '125', 40),
('Macbook Pro', 'Electronics', '1800.75', 61),
('Diapers', 'Toddlers', '12.00', 55),
('Hot Sauce', 'Food', '3.72', 90),
('Sushi Hand Roll', 'Food', '5.55', 150),
('Reddit Gold', 'Online', '3.99', 10000),
('Dog Food', 'Pets', '20.99', 50);


SELECT * FROM bamazonProducts;

CREATE TABLE bamazonDepartments (
	'department_id' INT auto_increment PRIMARY KEY,
'department_name' VARCHAR(100) NOT NULL,
'overhead_cost' DECIMAL(10, 4),
'total_sales' DECIMAL(10, 4)
);