select
	h.id, h.name, h.stars, h.preview, h.picture_id,
	rs.review_count, rs.review_score,
	coalesce(av_current.price, av_past.price) as price,
	coalesce(av_current.discount_price, av_past.discount_price) as discount_price,
	av_current.price is not null as is_last_sale
from hotels h
	-- Number of reviews and average note
left join lateral (
	select
		count(*)::int as review_count,
		avg(score) as review_score
	from reviews r
	where r.hotel_id = h.id
) rs on true
	-- Compute current sale if still in stock
left join lateral (
	select
		o.price,
		o.discount_price
	from openings o
	join rooms r on
		r.id = o.room_id
	cross join lateral (
		select count(*)::int as booked
		from bookings b
		where
			b.room_id = o.room_id
			and b.date = o.date
  ) bk
	where
		r.hotel_id = h.id
		and o.sale_id = (
			select id
			from sale_dates
			order by start_date desc
			limit 1
		)
		and o.stock - bk.booked > 0
	order by
		o.discount_price asc,
		o.id asc
	limit 1
) av_current on true
	-- Only when current sale has no stock, cheapest opening with stock on the most recent sale
left join lateral (
	select
		o.price,
		o.discount_price
	from openings o
	join rooms r on
		r.id = o.room_id
	join sale_dates sd on
		sd.id = o.sale_id
	cross join lateral (
		select count(*)::int as booked
		from bookings b
		where
			b.room_id = o.room_id
			and b.date = o.date
  ) bk
	where
		av_current.price is null
		and r.hotel_id = h.id
		and o.stock - bk.booked > 0
	order by
		sd.start_date desc,
		o.discount_price asc,
		o.id asc
	limit 1
) av_past on true
order by h.id