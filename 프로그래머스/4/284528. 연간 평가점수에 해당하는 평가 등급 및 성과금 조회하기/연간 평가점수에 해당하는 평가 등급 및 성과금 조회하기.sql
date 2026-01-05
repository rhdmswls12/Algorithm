-- 코드를 작성해주세요
with avg_scores as (
    select emp_no, avg(score) avg_score
    from hr_grade
    group by emp_no
)
select e.emp_no, e.emp_name,
case when a.avg_score >= 96 then 'S'
when a.avg_score >= 90 then 'A'
when a.avg_score >= 80 then 'B'
else 'C'
end as grade,
case when a.avg_score >= 96 then e.sal * 0.2
when a.avg_score >= 90 then e.sal * 0.15
when a.avg_score >= 80 then e.sal * 0.1
else 0
end as bonus
from hr_employees e join avg_scores a
on e.emp_no = a.emp_no
order by 1;