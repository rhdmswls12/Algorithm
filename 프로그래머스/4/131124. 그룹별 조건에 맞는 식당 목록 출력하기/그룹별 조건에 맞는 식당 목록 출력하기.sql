-- 코드를 입력하세요
with reviews as
(SELECT member_id, count(member_id) count
from rest_review
group by member_id
order by count desc limit 1)

select m.member_name, re.review_text, date_format(re.review_date, '%Y-%m-%d') as review_date
from rest_review re join reviews r
on re.member_id = r.member_id
join member_profile m
on re.member_id = m.member_id
order by 3, 2;