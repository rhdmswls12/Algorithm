-- 코드를 작성해주세요
with front as (
    select sum(code) code
    from skillcodes
    where category = 'Front End'
), 
cs as (
    select code
    from skillcodes
    where name = 'C#'
),
py as (
    select code 
    from skillcodes
    where name = 'Python'
)

select case
when (f.code & d.skill_code) > 0 and (p.code & d.skill_code) > 0 then 'A'
when (c.code & d.skill_code) > 0 then 'B'
when (f.code & d.skill_code) > 0 then 'C'
end as grade,
d.id, d.email
from developers d
cross join front f 
cross join cs c 
cross join py p
having grade is not null
order by grade, d.id;