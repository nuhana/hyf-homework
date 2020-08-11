create table customer(
id int primary key,
name varchar(255),
city varchar(255),
zip int,
street varchar(255) not null,
mobile int not null,
email varchar(255) not null);

create table orders(
order_number int primary key,
total_price int,
customer_id int unsigned not null,
foreign key (customer_id) references customer(id) );

create table product(
product_id int primary key,
name varchar(255),
price int,
quantity int,
orders_id int unsigned not null,
customer_id int unsigned not null,
foreign key (orders_id) references orders(id),
foreign key (customer_id) references customer(id));