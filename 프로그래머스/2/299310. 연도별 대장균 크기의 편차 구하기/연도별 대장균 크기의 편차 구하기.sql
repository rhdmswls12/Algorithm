with max_year as (
    select year(differentiation_date) year, max(size_of_colony) max_size
    from ecoli_data
    group by year(differentiation_date)
)

select year(e.differentiation_date) year, (m.max_size - e.size_of_colony) year_dev, e.id
from max_year m join ecoli_data e
on m.year = year(e.differentiation_date)
order by year, year_dev;