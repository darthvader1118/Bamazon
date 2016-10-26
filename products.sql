CREATE DATABASE	Bamazon;
USE Bamazon;
CREATE TABLE Products (
ItemID int NOT NULL auto_increment,
productName VARCHAR(255) NOT NULL,
DepartmentName VARCHAR(255) NOT NULL,
Price dec(10,4),
StockQuantity int not null,
primary key (ItemID)
);
SELECT * FROM Products;
INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Harry Potter", "book", 8.99, 20);