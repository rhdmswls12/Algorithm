-- 코드를 입력하세요
with july_group as
(select flavor, sum(total_order) total_order
from july
group by flavor)

select h.flavor
from july_group j join first_half h
on j.flavor = h.flavor
order by (h.total_order + j.total_order) desc limit 3;