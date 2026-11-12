import DB from '../db'

export interface HotelRow {
    id: number;
    name: string;
    stars: number;
    preview: string;
    picture_id: string;
}

export const findAllHotels = async () => {
    const res = await DB.query<HotelRow>(`SELECT id, name, stars, preview, picture_id FROM hotels ORDER BY id`);
    return res.rows;
}