import DB from '../db'

export interface HotelSummaryRow {
  id: number
  name: string
  stars: number
  preview: string
  picture_id: string
  review_count: number
  review_score: number | null
  discount_price: number | null
  price: number | null
  is_last_sale: boolean | null
}

export const findAllHotels = async () => {
  const res = await DB.query<HotelSummaryRow>(`
        select h.id, h.name, h.stars, h.preview, h.picture_id, rs.review_count, rs.review_score, av.price, av.discount_price, av.is_last_sale
        from hotels h
        left join lateral (
            select count(*)::int as review_count, avg(score) as review_score
            from reviews r 
            where r.hotel_id = h.id
        ) rs on true
        left join lateral (
        	select o.price, o.discount_price, sd.id = (select id from sale_dates order by start_date desc limit 1) as is_last_sale
        	from openings o 
        	join rooms r on r.id = o.room_id
        	join sale_dates sd on o.sale_id = sd.id
            cross join lateral(
                select count(*)::int as booked
                from bookings b
                where b.room_id = o.room_id and b.date = o.date
            ) bk
        	where r.hotel_id = h.id
        		and o.stock - bk.booked > 0
        	order by sd.start_date desc, o.discount_price asc, o.id asc
        	limit 1
        ) av on true
        order by h.id
`)
  return res.rows
}
