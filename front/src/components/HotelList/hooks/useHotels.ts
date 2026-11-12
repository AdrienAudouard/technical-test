import { useQuery } from '@tanstack/react-query';
import { fetchHotels } from 'api/hotels';

export const useHotels = () => useQuery({ queryKey: ['/hotels'], queryFn: fetchHotels });