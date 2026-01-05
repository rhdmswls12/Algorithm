-- 코드를 작성해주세요
select g3.id
from ecoli_data g1 join ecoli_data g2
on g1.id = g2.parent_id
join ecoli_data g3
on g2.id = g3.parent_id
where g1.parent_id is null
order by 1;