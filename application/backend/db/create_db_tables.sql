-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema biteRateDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biteRateDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biteRateDB` DEFAULT CHARACTER SET utf8 ;
USE `biteRateDB` ;

-- -----------------------------------------------------
-- Table `biteRateDB`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biteRateDB`.`User` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `password` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biteRateDB`.`Restaurant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biteRateDB`.`Restaurant` (
  `restaurant_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `cuisine` VARCHAR(45) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `open_date` DATETIME NOT NULL,
  PRIMARY KEY (`restaurant_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biteRateDB`.`ImageURL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biteRateDB`.`ImageURL` (
  `image_id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`image_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biteRateDB`.`RestaurantImage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biteRateDB`.`RestaurantImage` (
  `restaurant_image_id` INT NOT NULL AUTO_INCREMENT,
  `restaurant` INT NOT NULL,
  `image` INT NOT NULL,
  PRIMARY KEY (`restaurant_image_id`),
  INDEX `fk_restaurantImage_restaurant_idx` (`restaurant` ASC),
  INDEX `fk_restaurantImage_imageURL_idx` (`image` ASC),
  CONSTRAINT `fk_restaurantImage_restaurant`
    FOREIGN KEY (`restaurant`)
    REFERENCES `biteRateDB`.`Restaurant` (`restaurant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_restaurantImage_imageURL`
    FOREIGN KEY (`image`)
    REFERENCES `biteRateDB`.`ImageURL` (`image_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
