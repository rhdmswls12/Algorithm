-- 코드를 작성해주세요
with type_count as
(select fish_type, count(*) fish_count
from fish_info
group by fish_type)

select t.fish_count FISH_COUNT, n.fish_name FISH_NAME
from type_count t left join fish_name_info n
on t.fish_type = n.fish_type
order by 1 desc;