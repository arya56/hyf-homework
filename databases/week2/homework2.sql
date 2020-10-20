--  Part one
--  Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Finishing the home work','edit current program','2020-04-12','2020-04-13','2020-09-21',3,6);

-- Change the title of a task

UPDATE task
SET title = 'Remove previous week HW'
WHERE title ='Finishing the home work';


-- Change a task due date

UPDATE task
SET due_date = '2020-10-01'
WHERE title ='Remove previous week HW';

--  Change a task status

UPDATE task
SET status_id = 1
WHERE id = 35;

-- Mark a task as complete

UPDATE task
SET status_id = 3
WHERE title='Wash clothes';

--  Delete a task
DELETE FROM task
WHERE description='edit current program';


-- Part two
-- Create a School database

DROP DATABASE IF EXISTS school;
CREATE DATABASE school;



-- creating Class table: with the columns: id, name, begins (date), ends (date)
USE school;
CREATE TABLE Class (
    class_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    begins date NOT NULL,
    ends date NOT NULL,
    PRIMARY KEY (class_id)
);
-- creating Student table : with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE Student (
    student_id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(155),
    phone varchar(20) NOT NULL,
    class_id int NOT NULL,
    PRIMARY KEY (student_id),
	FOREIGN KEY (class_id) REFERENCES Class(class_id)

);

-- Create an index on the name column of the student table.
USE school;
CREATE INDEX name_index
ON Student(name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE Class
ADD status enum('not-started','ongoing','finished');

-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title AS user_tasks
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.email like '%@spotify.com';


-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.title
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE user.name like 'Donald Duck' AND task.status_id = 1 ;


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title
FROM task
JOIN user_task on task.id = user_task.task_id
JOIN user on user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created) = 9 ;

-- Find how many tasks where created in each month, e.g. how many 
-- tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT DATE_FORMAT(task.created, "%m") AS created_month,
	count(task.id) as count
FROM task
GROUP BY created_month;  