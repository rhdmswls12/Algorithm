-- 코드를 입력하세요
SELECT year(o.sales_date) year, month(o.sales_date) month, i.gender, count(distinct i.user_id) users
from user_info i join online_sale o
on i.user_id = o.user_id
where i.gender is not null
group by year(o.sales_date), month(o.sales_date), i.gender
order by 1, 2, 3;