CREATE database lesson2_part2;
use lesson2_part2;
create table class(
 id int unsigned primary key auto_increment, 
 name varchar(225), 
 begins datetime, 
 ends datetime);
 
 create table student( 
 id int unsigned primary key auto_increment, 
 name varchar(225), 
 email varchar(255),
 phone datetime);

 
 create index idx_name on student(name);

 ALTER TABLE class
ADD status enum('not-started', 'ongoing', 'finished') default 'ongoing';
