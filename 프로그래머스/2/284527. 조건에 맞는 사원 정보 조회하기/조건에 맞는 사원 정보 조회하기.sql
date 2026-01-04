-- 코드를 작성해주세요
with high_score as
(select emp_no, sum(score) score
from hr_grade
group by emp_no
order by score desc limit 1)

select h.score, h.emp_no, e.emp_name, e.position, e.email
from high_score h join hr_employees e
on h.emp_no = e.emp_no