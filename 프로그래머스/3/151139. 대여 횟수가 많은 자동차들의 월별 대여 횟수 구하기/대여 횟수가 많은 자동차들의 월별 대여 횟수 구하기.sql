-- 코드를 입력하세요
with records as
(select car_id, count(car_id) count
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where start_date >= '2022-08-01' and start_date < '2022-11-01'
group by car_id
having count >= 5
order by car_id)

select month(c.start_date) month, c.car_id, count(*) records
from records r join CAR_RENTAL_COMPANY_RENTAL_HISTORY c
on r.car_id = c.car_id
where start_date >= '2022-08-01' and start_date < '2022-11-01'
group by month(c.start_date), c.car_id
order by 1, 2 desc;