--      how many tasks are in the task table
SELECT COUNT(id) AS Numbe_OF_Tasks
FROM task;

--   how many tasks in the task table do not have a valid due date

SELECT COUNT(id) AS NULL_Number_Dates
FROM task
WHERE due_date IS NULL;

--  all the tasks that are marked as done

SELECT *
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE status.name = 'Done';

-- all the tasks that are not marked as done
SELECT *
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE status.name != 'Done';

-- all the tasks, sorted with the most recently created first

SELECT *
FROM task
ORDER BY created DESC;

-- the single most recently created task

SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

-- the title and due date of all tasks where the title or description contains database

SELECT title, due_date
FROM task
WHERE description LIKE '%database%' 
    OR title LIKE '%database%';

-- the title and status (as text) of all tasks

SELECT task.title, status.name
FROM status
JOIN task ON task.status_id = status.id;

--  the name of each status, along with a count of how many tasks have that status

SELECT COUNT(task.id) AS Task_Number, name AS status
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name;
-- the names of all statuses, sorted by the status with most tasks first

SELECT count(task.title) AS Task_Number, name
FROM status
JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY Task_Number DESC;