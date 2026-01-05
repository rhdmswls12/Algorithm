-- 코드를 입력하세요
WITH RECURSIVE hours AS (
    SELECT 0 AS hour
    UNION ALL
    SELECT hour + 1
    FROM hours
    WHERE hour < 23
)
select h.hour, count(animal_id) count
from hours h left join animal_outs o
on h.hour = hour(o.datetime)
group by h.hour;