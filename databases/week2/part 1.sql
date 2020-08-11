-- Add a task
insert into task(title, description, created, updated, due_date, status_id, user_id)
values('wash sofa', 'only one', now(), '2020-8-20 08:00:01', now(), 2, 10);
-- Change the title
update task set title='nothing' where id=31;
-- Change a task due date
update task set due_date=now() where id=1;
-- Change a task status
update task set status_id=2 where id=2;
-- Delete a task
delete from task where id=42;

select* from task;



