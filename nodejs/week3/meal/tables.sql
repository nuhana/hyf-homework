

CREATE TABLE meals (
  `id` INT NOT NULL  AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `maxNumberOfGuests` int,
  `description` VARCHAR(45) NULL,
  `createdAt` DATETIME(6) NULL,
  `price` INT(45) NULL,
  PRIMARY KEY (id)
  );
  
  CREATE TABLE reservations (
  id int unsigned primary key auto_increment,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `mealId` int,
 FOREIGN KEY (mealId) REFERENCES meals(id) ON UPDATE cascade);
  
 
  CREATE TABLE reviews (
  `id` INT NOT NULL primary key AUTO_INCREMENT,
  `numberOfStars` int,
  `content` VARCHAR(45) ,
  `mealId` INT(45) ,
  `createdAt` date,
  FOREIGN KEY (mealId) REFERENCES meals(id) ON UPDATE CASCADE);