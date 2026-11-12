import { Router } from "express";
import { getHotels } from "../services/hotelService";

const router = Router();

router.get("/", async (req, res) => {
    const hotels = await getHotels();
    res.json(hotels);
});

export default router;