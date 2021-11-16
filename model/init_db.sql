DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS vets;
DROP TABLE IF EXISTS treatments;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS images;



CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	`country_code` varchar(255) NOT NULL,
    `street_number` INT NOT NULL,
    `street_name` varchar(255) NOT NULL,
	`coords` varchar(255),
	PRIMARY KEY (`id`)
);

<<<<<<< HEAD
CREATE TABLE `pet` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`pet_name` varchar(255) NOT NULL,
	`user_id` INT NOT NULL,
	`breed` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`vet_id` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `vet` (
=======
CREATE TABLE `vets` (
>>>>>>> ded063310b15c4bde96753ee3e387d51d965d397
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`street_name` varchar(255) NOT NULL,
	`phone_number` varchar(255) NOT NULL,
    `street_number` INT NOT NULL,
    `city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	`country_code` varchar(255) NOT NULL,
	`coords` varchar(255),
	`appointment` varchar(255),
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `treatments` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`completed` BOOLEAN NOT NULL,
	`frequency` BOOLEAN NOT NULL,
	`pet_id` INT NOT NULL,
	`vet_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);
<<<<<<< HEAD
INSERT INTO pet (pet_name, user_id, breed, dob, vet_id) VALUES ('Dolit', 1,'mongrel dog', '2018-02-12', 1);

INSERT INTO pet (pet_name, user_id, breed, dob, vet_id) VALUES ('Jeri', 1,'mongrel dog', '2018-02-12', 1);
=======

CREATE TABLE `pets` (
	`pet_id` INT NOT NULL AUTO_INCREMENT,
	`pet_name` varchar(255) NOT NULL,
	`breed` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`user_id` INT NOT NULL,
	`vet_id` INT,
	`treatment_id` INT,
	PRIMARY KEY (`pet_id`)
);

CREATE TABLE `images` (
	`img_id` INT NOT NULL AUTO_INCREMENT,
	`pet_id` INT NOT NULL,
	`image` varchar(255) NOT NULL,
	PRIMARY KEY (`img_id`)
);
>>>>>>> ded063310b15c4bde96753ee3e387d51d965d397
