create database foreign_key;
use foreign_key;
create table courses (
	course_id int primary key,
    name varchar(10)
);
alter table courses
change name course_name varchar(10);
create table teachers (
	teacher_id int primary key,
    teacher_name varchar(20),
    teacher_course_id int,
    foreign key (teacher_course_id) references courses(course_id)
    on update cascade
    on delete cascade
);
drop table teachers;
drop table courses;
insert into courses values
(101, "Science"),
(102, "MySQL"),
(103, "HTML"),
(104, "CSS"),
(105, "JS");
insert into teachers values 
(01, "Alka", 101);
insert into teachers values 
(02, "TriwebAPI", 104);
update courses
set course_id = 909
where course_id = 105;
select * from courses;
select * from teachers;
delete from courses
where course_id = 909;

select *
from courses c
join teachers t
on c.course_id = t.teacher_course_id
union 
select *
from courses c
right join teachers t
on c.course_id = t.teacher_course_id;