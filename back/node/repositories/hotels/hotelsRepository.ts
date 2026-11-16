import { readFileSync } from 'node:fs'
import DB from '../../db'
import { join } from 'node:path'

const findAllHotelsQuery = readFileSync(
  join(__dirname, 'sql/findAllHotels.sql')
).toString()

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
  const res = await DB.query<HotelSummaryRow>(findAllHotelsQuery)
  return res.rows
}
