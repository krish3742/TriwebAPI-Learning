CREATE DATABASE college;
use college;

create table student(
	Roll_no int primary key,
    Name varchar(50),
    Marks int not null,
    Grade varchar(1),
    City varchar(20)
);

insert into student(roll_no, name, marks, grade, city) values
(101, "Anil", 78, "C", "Pune"),
(102, "Anita", 87, "B", "Pune"),
(103, "Kshitij", 85, "B", "Gorakhpur"),
(104, "Anushka", 95, "A", "Mumbai"),
(105, "Alka", 40, "F", "Mumbai"),
(106, "Chotu", 89, "B", "Gorakhpur");

insert into student(roll_no, name, marks, grade, city) values
(107, "Anil", 78, "C", "Pune");

alter table student 
add Created_On timestamp default current_timestamp;

select city, avg(marks)
from student
group by city
order by avg(marks) desc;

select grade, count(name)
from student
group by grade
order by (grade); 

drop table student;

insert into student(roll_no, name, marks, grade, city) values
(108, "Piyush", 92, "A", "Pune"),
(109, "Takla", 99, "A", "Mumbai"),
(110, "Siddhart", 95, "A", "Gorakhpur");

delete from student 
where roll_no = 108;

select * from student;

select city, count(name), avg(marks)
from student
group by city
having max(marks) > 90;

select city as City
from student
where marks > 90
group by city
having max(marks) > 95
order by city;

select * from student;

alter table student
change Name Full_Names varchar(20);

delete from student
where marks < 80;

alter table student
drop column Created_on;

select Full_Names, Marks
from student
where marks > (select avg(marks)
from student);

select Roll_No, Full_Names
from student
where roll_no % 2 = 0;

select Roll_No, Full_Names
from student
where roll_no in (
	select Roll_No
	from student
	where roll_no % 2 = 0
);
    
select max(marks)
from student
where city = "Gorakhpur";

select Full_Names, Marks
from student
where city = "Gorakhpur" and marks >= (
	select max(marks)
    from student
    where city = "Gorakhpur"
);

create view teacher_view as
select Roll_No, Full_Names, Marks
from student;

select *
from teacher_view;

drop view teacher_view;