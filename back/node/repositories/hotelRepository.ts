import DB from '../db'

export interface HotelSummaryRow {
    id: number;
    name: string;
    stars: number;
    preview: string;
    picture_id: string;
    review_count: number;
    review_score: number | null;
    discount_price: number | null;
    price: number | null;
}

export const findAllHotels = async () => {
    const res = await DB.query<HotelSummaryRow>(`
        SELECT h.id, h.name, h.stars, h.preview, h.picture_id, rs.review_count, rs.review_score, av.price, av.discount_price 
        FROM hotels h
        LEFT JOIN LATERAL (
            SELECT count(*)::int AS review_count, avg(score) AS review_score
            FROM reviews r 
            WHERE r.hotel_id = h.id
        ) rs ON true
        left join lateral (
        	select o.price, o.discount_price 
        	from openings o 
        	join rooms r on r.id = o.room_id
        	where r.hotel_id = h.id
        	and o.sale_id = (select id from sale_dates order by start_date desc limit 1)
        	and o.stock > 0
        	order by o.discount_price asc, o.id ASC
            limit 1
        ) av on true
        ORDER BY h.id
`);
    return res.rows;
}