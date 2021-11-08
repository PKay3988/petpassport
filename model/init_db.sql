DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS vets;
DROP TABLE IF EXISTS treatments;
DROP TABLE IF EXISTS users;



CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
    `postal_code` INT NOT NULL,
	`city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
    `street_number` INT NOT NULL,
    `street_name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `vets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`street_name` varchar(255) NOT NULL,
    `postal_code` INT NOT NULL,
	`phone_number` varchar(255) NOT NULL,
    `street_number` INT NOT NULL,
    `city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	`country_code` varchar(255) NOT NULL,
	`coords` varchar(255),
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`),
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

CREATE TABLE `pets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`pet_name` varchar(255) NOT NULL,
	`breed` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`user_id` INT NOT NULL,
	`vet_id` INT,
	`treatment_id` INT,
	PRIMARY KEY (`id`),
);