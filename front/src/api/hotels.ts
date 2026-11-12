import { Hotel } from 'types/hotel'
import { fetcher } from './client'

export const fetchHotels = () => fetcher<Hotel[]>('/hotels')
