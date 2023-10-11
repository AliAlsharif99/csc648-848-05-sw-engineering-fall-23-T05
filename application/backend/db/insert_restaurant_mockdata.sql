-- Mock data for biteRateDB.Restaurant
INSERT INTO `biteRateDB`.`Restaurant` (`name`, `cuisine`, `address`, `open_date`) VALUES
('BiteRateBistro', 'Italian', '123 Tasty St, Flavor Town', '2023-01-01 00:00:00'),
('PastaPlace', 'Italian', '456 Italiano Dr, Sauce City', '2023-01-02 00:00:00'),
('SpiceCorner', 'Indian', '789 Curry Ln, Spice City', '2022-05-15 00:00:00'),
('TacoTerritory', 'Mexican', '101 Taco Blvd, Hot Pepper', '2022-07-20 00:00:00'),
('SushiSphere', 'Japanese', '202 Sushi St, Raw Town', '2021-12-12 00:00:00'),
('BurgerBarn', 'American', '303 Beef Ave, Grilled City', '2023-01-15 00:00:00'),
('PizzaPalace', 'Italian', '404 Cheese Rd, Olive Town', '2022-11-01 00:00:00'),
('NoodleNest', 'Chinese', '505 Noodle Dr, Steamy City', '2023-04-01 00:00:00'),
('FishFiesta', 'Seafood', '606 Ocean Ave, Wave City', '2023-02-01 00:00:00'),
('SteakStation', 'American', '707 Steak Blvd, BBQ Town', '2023-03-01 00:00:00'),
('VegVillage', 'Vegan', '808 Green St, Fresh City', '2022-02-15 00:00:00'),
('BaklavaBay', 'Turkish', '909 Sweet Ln, Dessert City', '2021-08-15 00:00:00'),
('PizzaPioneer', 'Italian', '110 Pepperoni Blvd, Cheesy Town', '2022-09-01 00:00:00'),
('RamenRealm', 'Japanese', '121 Ramen Rd, Broth City', '2022-01-01 00:00:00'),
('DonutDen', 'American', '131 Sugar Dr, Glaze City', '2023-05-01 00:00:00');


-- Mock data for biteRateDB.ImageURL
INSERT INTO biteRateDB.ImageURL (image_url) VALUES
('../static/resources/images/restaurant_image1.jpg'),
('../static/resources/images/restaurant_image2.jpg'),
('../static/resources/images/restaurant_image3.jpg'),
('../static/resources/images/restaurant_image4.jpg'),
('../static/resources/images/restaurant_image5.jpg'),
('../static/resources/images/restaurant_image6.jpg'),
('../static/resources/images/restaurant_image7.jpg'),
('../static/resources/images/restaurant_image8.jpg'),
('../static/resources/images/restaurant_image9.jpg'),
('../static/resources/images/restaurant_image10.jpg'),
('../static/resources/images/restaurant_image11.jpg'),
('../static/resources/images/restaurant_image12.jpg'),
('../static/resources/images/restaurant_image13.jpg'),
('../static/resources/images/restaurant_image14.jpg'),
('../static/resources/images/restaurant_image15.jpg');


-- Mock data for biteRateDB.ImageURL
INSERT INTO `biteRateDB`.`RestaurantImage` (`restaurant`, `image`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);
