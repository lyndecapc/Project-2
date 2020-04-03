CREATE DATABASE IF NOT EXISTS hounders_db;
USE hounders_db;
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT,
    dog_name varchar(255) NOT NULL,
    gender varchar(10) NOT NULL,
    breed varchar(50) NOT NULL,
    age varchar(50) NOT NULL,
    size varchar(25) NOT NULL,
    color varchar(25),
    coat varchar(25),
    good_with_children BOOLEAN,
    good_with_dogs BOOLEAN,
    good_with_cats BOOLEAN,
    location varchar(50) NOT NULL,
    PRIMARY KEY (id)
);