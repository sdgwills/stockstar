select w.id, s.ticker
from users u
join watchlist w on u.id  = w.userid
join stocks s on w.tickerid = s.id
where u.id = ${user_id}