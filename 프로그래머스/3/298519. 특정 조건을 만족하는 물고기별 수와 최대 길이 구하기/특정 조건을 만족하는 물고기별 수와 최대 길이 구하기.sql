-- 코드를 작성해주세요
with avg_length as
(select fish_type, avg(ifnull(length, 10)) avg_length
from fish_info
group by fish_type
having avg_length >= 33)

select count(a.fish_type) fish_count, max(i.length) max_length, a.fish_type
from avg_length a join fish_info i
on a.fish_type = i.fish_type
group by a.fish_type
order by 3;