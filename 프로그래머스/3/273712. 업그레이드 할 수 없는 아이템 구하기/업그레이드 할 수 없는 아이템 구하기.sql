-- 코드를 작성해주세요
select item_id, item_name, rarity
from item_info
where item_id in (
select p.item_id
from item_tree p left join item_tree c
on p.item_id = c.parent_item_id
where c.item_id is null)
order by 1 desc;