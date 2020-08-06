-- 1/number of tasks
SELECT COUNT(*) FROM task;
-- 2/number of tasks do not have a valid due date
SELECT COUNT(*)
FROM task
WHERE due_date IS NULL;
-- 3/tasks that are marked as done
SELECT *
FROM task
JOIN status ON task.status_id= status.id
 WHERE name = 'Done';
-- 4/tasks that are not marked as done
SELECT *
FROM task
JOIN status ON task.status_id= status.id
WHERE name != 'Done';
-- 5/tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;
-- 6/single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;
-- 7/title or description contains database
SELECT title , due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- 8/ title and status (as text)
SELECT task.title , status.name
FROM task
JOIN status ON task.status_id= status.id;
-- 9/name of each status, along with a count of how many tasks have that status 
SELECT status.name , COUNT(*) AS number_of_tasks
FROM task
JOIN status ON task.status_id= status.id
GROUP BY task.status_id;
-- 10/names of all statuses, sorted by the status with most tasks first
SELECT status.name , COUNT(*) AS number_of_tasks
FROM task
JOIN status ON task.status_id= status.id
GROUP BY task.status_id
ORDER BY number_of_tasks DESC;



