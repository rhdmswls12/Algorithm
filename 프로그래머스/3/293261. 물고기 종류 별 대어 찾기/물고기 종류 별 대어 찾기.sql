-- 코드를 작성해주세요
with type_max as (
    select fish_type, max(length) max_length
    from fish_info
    group by fish_type
)
select i.id, n.fish_name, i.length
from fish_info i join type_max t join fish_name_info n
on i.fish_type = t.fish_type
and i.length = t.max_length
and i.fish_type = n.fish_type
order by i.id;