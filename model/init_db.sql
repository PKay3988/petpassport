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
<<<<<<< HEAD
	`city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	`country_code` varchar(255) NOT NULL,
=======
    `postal_code` INT NOT NULL,
	`city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
>>>>>>> a7869a9 (routes - db fixes)
    `street_number` INT NOT NULL,
    `street_name` varchar(255) NOT NULL,
	`coords` varchar(255),
	PRIMARY KEY (`id`)
);

<<<<<<< HEAD
CREATE TABLE `vets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`street_name` varchar(255) NOT NULL,
=======
CREATE TABLE `vet` (
	`id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	`street_name` varchar(255) NOT NULL,
    `postal_code` INT NOT NULL,
>>>>>>> a7869a9 (routes - db fixes)
	`phone_number` varchar(255) NOT NULL,
    `street_number` INT NOT NULL,
    `city` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
	`country_code` varchar(255) NOT NULL,
<<<<<<< HEAD
	`coords` varchar(255),
	`appointment` varchar(255),
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
=======
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`user_id`) REFERENCES user(id)
);

CREATE TABLE `pet` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`pet_name` varchar(255) NOT NULL,
	`breed` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`user_id` INT NOT NULL,
	`vet_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`user_id`) REFERENCES user(id),
	FOREIGN KEY (`vet_id`) REFERENCES vet(id)
>>>>>>> a7869a9 (routes - db fixes)
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
	`pet_id` INT NOT NULL AUTO_INCREMENT,
	`pet_name` varchar(255) NOT NULL,
	`breed` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`user_id` INT NOT NULL,
	`vet_id` INT,
	`treatment_id` INT,
	PRIMARY KEY (`pet_id`)
);

CREATE TABLE `diet` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`brand` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`unit` varchar(255) NOT NULL,
	`notes` varchar(255) NOT NULL,
	`pet_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `grooming` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`type` varchar(255) NOT NULL,
	`date` DATE NOT NULL,
	`notes` varchar(255) NOT NULL,
	`pet_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
	`img_id` INT NOT NULL AUTO_INCREMENT,
	`pet_id` INT NOT NULL,
	`image` varchar(255) NOT NULL,
	PRIMARY KEY (`img_id`)
);
	`frequency` INT NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`pet_id`) REFERENCES pet(id),
	FOREIGN KEY (`vet_id`) REFERENCES vet(id)
);
