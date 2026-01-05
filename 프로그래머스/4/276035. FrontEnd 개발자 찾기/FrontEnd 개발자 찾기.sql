-- 코드를 작성해주세요
with fe as (
select sum(code) code
from skillcodes
where category = 'Front End'
)
select d.id, d.email, d.first_name, d.last_name
from developers d join fe f
where d.skill_code & f.code > 1
order by 1;
