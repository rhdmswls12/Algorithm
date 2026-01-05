-- 코드를 입력하세요
SELECT 
c.car_id, 
c.car_type, 
floor(c.daily_fee * 30 * (100 - p.discount_rate) / 100) as fee
from car_rental_company_car c
join car_rental_company_discount_plan p
on c.car_type = p.car_type
where c.car_type in ('세단', 'SUV') 
and not exists (
select 1
from car_rental_company_rental_history h
where h.car_id = c.car_id
and h.start_date <= '2022-11-30'
and h.end_date >= '2022-11-01'
)
and p.duration_type = '30일 이상'
and (c.daily_fee * 30 * (100 - p.discount_rate) / 100) >= 500000
and (c.daily_fee * 30 * (100 - p.discount_rate) / 100) < 2000000
order by 3 desc, 2, 1 desc;