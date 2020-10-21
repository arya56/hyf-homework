-- Part one Queries to write
-- Get all meals

SELECT title AS Meals
FROM Meal;


-- Add a new meal

INSERT INTO Meal
    ( title, description, when_create,location, max_reservations, price, created_date)
VALUES
    ( 'Chiken Massala', 'typical indian dishes with full of spices',
        now(), 'Ballerupvej 43', 10, 125, '2020-09-04');

-- Get a meal with any id,

SELECT title, description
FROM Meal
WHERE id=3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal
SET description = 'Sprinkle the salt and drizzle the olive oil on top of the eggs' 
WHERE id=3;

-- Delete a meal with any id

DELETE FROM Meal
WHERE id = 7;

-- Part 2
-- Queries to write

-- Get all reservations

SELECT *
FROM Reservation;

-- Add a new reservation

INSERT INTO Reservation
    (number_of_guests, meal_id, created_date, contact_name, contact_email, contact_phonenumber)
values
    ( 2, 1, '2020-10-06', 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');

-- Get a reservation with any id

SELECT *
FROM Reservation
WHERE id = 8;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET contact_phonenumber ='891-952-6749',contact_name = 'John Smith'
WHERE id=8;

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 7;

-- Part3 Queries to write in Reviews

-- Get all reviews

SELECT *
FROM Review;

-- Add a new review
INSERT INTO Review
    ( title,description, meal_id, stars)
VALUES
    ('good', 'taste like always', 2, 4);

-- Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET title='low',stars = 2
WHERE id=5;

-- Delete a review with any id, fx 1

DELETE FROM Review
WHERE id = 7;

-- Get meals that has a price smaller than a specific price fx 90

SELECT title
FROM Meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT Meal.title
FROM Meal
    JOIN Reservation
    ON Meal.id = Reservation.meal_id
WHERE Reservation.created_date > CURRENT_TIMESTAMP;

-- Get meals that partially match a title. -- Rød grød med will match the meal with the title Rød grød med fløde

SELECT title AS partially_Match
FROM Meal
WHERE title like '%brø%';

-- Get meals that has been created between two dates

SELECT id, created_date, title AS '2019_2020'
FROM Meal
WHERE created_date BETWEEN '2019-09-01' AND CURRENT_TIMESTAMP;

-- Get only specific number of meals fx return only 5 meals

SELECT id, created_date, title
FROM Meal
LIMIT
4;

-- Get the meals that have good reviews
SELECT DISTINCT Meal.title AS Good_Reviewed , Review.stars AS Stars
FROM Meal
    JOIN Review
    ON Meal.id = Review.meal_id
WHERE Review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT Meal.title, Reservation.created_date
FROM Reservation
    JOIN Meal
    ON Meal.id = Reservation.meal_id
WHERE Meal.title IN  ('Smørrebrød','Fresh Pasta')
ORDER BY Reservation.created_date ASC;
-- Sort all meals by average number of stars in the reviews

SELECT Meal.title AS ALL_Meal, AVG(Review.stars) AS Rates
FROM Review
    RIGHT JOIN Meal
    ON Meal.id = Review.meal_id
GROUP BY Meal.title
ORDER BY Rates DESC;

