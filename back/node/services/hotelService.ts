import { findAllHotels, HotelRow } from "../repositories/hotelRepository";
import { Hotel } from "../types/hotel";

const toHotel = (row: HotelRow): Hotel => {
    return {
        id: row.id,
        name: row.name,
        stars: row.stars,
        preview: row.preview,
        pictureId: row.picture_id,
    }
}

export const getHotels = async () => {
    const rows = await findAllHotels();
    return rows.map(toHotel);
}