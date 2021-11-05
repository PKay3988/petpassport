DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS pet;
DROP TABLE IF EXISTS vet;
DROP TABLE IF EXISTS treatment;



CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
    `postal_code` varchar(255) NOT NULL,
	`city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
    `street_number` varchar(255) NOT NULL,
    `street_name` varchar(255) NOT NULL,

	PRIMARY KEY (`id`)
);

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
	`id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	`street_name` varchar(255) NOT NULL,
    `postal_code` varchar(255) NOT NULL,
	`phone_number` varchar(255) NOT NULL,
    `street_number` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `treatment` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`completed` BOOLEAN NOT NULL,
	`pet_id` INT NOT NULL,
	`vet_id` INT NOT NULL,
	`frequency` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);