create table customer(
id int primary key,
name varchar(255),
city varchar(255),
zip int,
street varchar(255) not null,
mobile int not null,
email varchar(255) not null);

create table orders(
id int primary key,
total_price int );

create table order_lines(
id int primary key,
number_of_products int,
  price int ,
  total int,
orders_id int primary key,
product_id int primary key
 
);
create table product(
id int primary key,
name varchar(255),
price int,
quantity int);