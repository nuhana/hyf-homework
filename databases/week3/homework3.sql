create Table meals(
 id int unsigned primary key auto_increment,
 title varchar(255),
 description text,
 location varchar(255),
 when_ date,
 max_reservations int,
 price decimal,
 created_date date
);


create Table reservations(
 id int unsigned primary key auto_increment,
 number_of_guests int,
 meal_id int unsigned not null ,
 reservation_date date,
 created_date date,
 contact_phonenumber varchar(255),
 contact_name varchar(255),
 contact_email varchar(255),
 FOREIGN KEY (meal_id) REFERENCES meals(id) ON UPDATE CASCADE
);

create Table reviews(
 id int unsigned primary key auto_increment,
 title varchar(255),
 description text,
 meal_id int unsigned not null,
 stars int,
 created_date date,
 FOREIGN KEY (meal_id) REFERENCES meals(id) ON UPDATE CASCADE
);
-- Get all meals
select * from meals;
-- Add a new meal
insert into meals(title, description, location, when_, max_reservations, price, created_date)
values('dolma', 'iraqi traditional food', 'copenhagen', '2020-08-20', '5', '200' , '2019-08-18');
insert into meals(title, description, location, when_, max_reservations, price, created_date)
values('flafel', 'iraqi traditional food', 'copenhagen', '2020-08-20', '6', '50' , '2020-08-30');
insert into meals(title, description, location, when_, max_reservations, price, created_date)
values('Rød grød med fløde', 'mexixan traditional food', 'copenhagen', '2020-08-20', '3', '100' , '2020-08-17');
-- Get a meal with any id
select * from meals
where id=2;
-- Update a meal with any id
update meal s
set title='shawrma', max_reservations='4'
where id=3;
-- Delete a meal with any id
delete from meals
where id=1;

-- Get all reservations
select * from reservations;
-- Add a new reservation
SET FOREIGN_KEY_CHECKS=0;
insert into reservations( number_of_guests, meal_id, reservation_date, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 1, '2018-06-07', '2018-05-15', '07777777', 'nuh kjikjs', 'abs@gmail.com');
insert into reservations( number_of_guests, meal_id, reservation_date, created_date, contact_phonenumber, contact_name, contact_email)
values(1, 3, '2018-06-20', '2018-05-15', '077755577', 'kjikjs', 'abs@gmail.com');
insert into reservations( number_of_guests, meal_id, reservation_date, created_date, contact_phonenumber, contact_name, contact_email)
values(1, 3, '2018-07-07', '2018-05-15', '0126564777', 'nuh kjjhhkjs', 'abs@gmail.com');
-- Get a reservation with any id
select * from reservations
where id=2;
-- Update a reservation with any id
update reservations
set contact_name='abed hud', contact_email='gts@gmail.com'
where id=3;
-- Delete a reservation with any id
delete from reservations
where id=1;

-- Get all reviews
select * from reviews;
-- Add a new review
SET FOREIGN_KEY_CHECKS=0;
insert into reviews( title, description, meal_id, stars, created_date)
values('good', 'so yummy food', 3, 4, '2018-06-12');
insert into reviews( title, description, meal_id, stars, created_date)
values('bad', 'good food', 2, 8, '2018-06-12');
insert into reviews( title, description, meal_id, stars, created_date)
values('good', 'wow food', 1, 5, '2018-06-12');
-- Get a review with any id
select * from reviews
where id=3;
-- Update a review with any id
update reviews
set tilte='fgdyj', stars='8'
where id=2;
-- Delete a review with any id
delete from reviews
where id=1;

-- Get meals that has a price smaller than a specific price
select * from meals
where price <=100;

-- Get meals that still has available reservations
select *
from meals
 join reservations on meals.id=reservations.meal_id
where meals.max_reservations > reservations.number_of_guests
and reservation_date='2018-06-20'
group by meals.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meals
where title like 'Rød grød med%';

-- Get meals that has been created between two dates
select * from meals
where created_date between '2018-08-20' and '2020-08-01';

-- Get only specific number of meals fx return only 5 meals
select * from meals
LIMIT 3;

-- Get the meals that have good reviews
select *
from meals
 join review on meals.id=reviews.meal_id
 where stars>=5;
 
-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM meals
JOIN reservations ON meals.id = reservations.meal_id
WHERE title = 'dolma'
order by meals.created_date;

-- Sort all meals by average number of stars in the reviews
select * , avg(stars) as avg_stars
from meals
join reviews on meals.id=reviews.meal_id
group by meals.id;
