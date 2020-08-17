create Table Meal(
 id int unsigned primary key auto_increment,
 title varchar(255),
 description text,
 location varchar(255),
 when_ date,
 max_reservations int,
 price decimal,
 created_date date
);


create Table Reservation(
 id int unsigned primary key auto_increment,
 number_of_guests int,
 meal_id int unsigned not null ,
 created_date date,
 contact_phonenumber varchar(255),
 contact_name varchar(255),
 contact_email varchar(255),
 FOREIGN KEY (meal_id) REFERENCES meal(id) ON UPDATE CASCADE
);

create Table Review(
 id int unsigned primary key auto_increment,
 title varchar(255),
 description text,
 meal_id int unsigned not null,
 stars int,
 created_date date,
 FOREIGN KEY (meal_id) REFERENCES meal(id) ON UPDATE CASCADE
);
-- Get all meals
select * from meal;
-- Add a new meal
insert into meal(title, description, location, when_, max_reservations, price, created_date)
values('dolma', 'iraqi traditional food', 'copenhagen', '2020-08-20', '5', '200' , '2019-08-18');
insert into meal(title, description, location, when_, max_reservations, price, created_date)
values('flafel', 'iraqi traditional food', 'copenhagen', '2020-08-20', '6', '50' , '2020-08-30');
insert into meal(title, description, location, when_, max_reservations, price, created_date)
values('Rød grød med fløde', 'mexixan traditional food', 'copenhagen', '2020-08-20', '3', '100' , '2020-08-17');
-- Get a meal with any id
select * from meal
where id=2;
-- Update a meal with any id
update meal 
set title='shawrma', max_reservations='4'
where id=3;
-- Delete a meal with any id
delete from meal
where id=1;

-- Get all reservations
select * from reservation;
-- Add a new reservation
SET FOREIGN_KEY_CHECKS=0;
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 1, '2018-05-15', '07777777', 'nuh kjikjs', 'abs@gmail.com');
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(5, 2, '2018-05-15', '077755577', 'kjikjs', 'abs@gmail.com');
insert into reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
values(3, 3, '2018-05-15', '0126564777', 'nuh kjjhhkjs', 'abs@gmail.com');
-- Get a reservation with any id
select * from reservation
where id=2;
-- Update a reservation with any id
update reservation 
set contact_name='abed hud', contact_email='gts@gmail.com'
where id=3;
-- Delete a reservation with any id
delete from reservation
where id=1;

-- Get all reviews
select * from review;
-- Add a new review
SET FOREIGN_KEY_CHECKS=0;
insert into review( title, description, meal_id, stars, created_date)
values('good', 'so yummy food', 3, 4, '2018-06-12');
insert into review( title, description, meal_id, stars, created_date)
values('bad', 'good food', 2, 8, '2018-06-12');
insert into review( title, description, meal_id, stars, created_date)
values('good', 'wow food', 1, 5, '2018-06-12');
-- Get a review with any id
select * from review
where id=3;
-- Update a review with any id
update review 
set tilte='fgdyj', stars='8'
where id=2;
-- Delete a review with any id
delete from review
where id=1;

-- Get meals that has a price smaller than a specific price
select * from meal
where price <=100;

-- Get meals that still has available reservations
select *
from meal
left join reservation on meal.id=reservation.meal_id
where meal.max_reservations > reservation.number_of_guests
group by meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal
where title like 'Rød grød med%';

-- Get meals that has been created between two dates
select * from meal
where created_date between '2018-08-20' and '2020-08-01';

-- Get only specific number of meals fx return only 5 meals
select * from meal
LIMIT 3;

-- Get the meals that have good reviews
select *
from meal
 join review on meal.id=review.meal_id
 where stars>=5;
 
-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE title = 'dolma'
order by meal.created_date;

-- Sort all meals by average number of stars in the reviews
select * , avg(stars) as avg_stars
from meal
join review on meal.id=review.meal_id
group by meal.id;
