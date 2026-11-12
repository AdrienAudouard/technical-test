import { HotelSummary } from 'types/hotel'
import { fetcher } from './client'

export const fetchHotels = () => fetcher<HotelSummary[]>('/hotels')
