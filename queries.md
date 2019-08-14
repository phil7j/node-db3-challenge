# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    SELECT p.productName, c.categoryName as Category
    FROM [Products] as p
    inner join categories as c on p.categoryId = c.categoryId
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    SELECT o.orderId, s.shipperName, o.orderDate
    FROM [Orders] as o
    inner join shippers as s on o.shipperId = s.shipperId
    where OrderDate < '1997-01-09'
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    SELECT p.ProductName, od.quantity
    FROM [OrderDetails] as od
    inner join products as p on od.productID = p.productId
    where orderId = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.