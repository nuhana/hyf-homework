-- the tasks assigned to users whose email ends in @spotify.com
select task.*, user.email 
from task
join user_task on task.id=user_task.task_id
join user on user_task.user_id=user.id
where email like '%@spotify.com';
-- tasks for 'Donald Duck' with status 'Not started'
select task.*, user.name, status.name
from task
join user_task on task.id=user_task.task_id
join user on user_task.user_id=user.id
join status on task.status_id=status.id
where user.name = 'Donald Duck'and status.name='not started';
-- tasks for 'Maryrose Meadows' that were created in september
select task.*, user.name 
from task
join user_task on task.id=user_task.task_id
join user on user_task.user_id=user.id
where user.name = 'Maryrose Meadows' and month(created)=9;
-- how many tasks where created in each month
select task.*, count(*) as number_of_tasks
from task
group by month(created);
