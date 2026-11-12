import { useQuery } from '@tanstack/react-query'
import { fetchUser } from 'api/user'

export const useUser = (id: number) =>
  useQuery({ queryKey: ['/users', id], queryFn: () => fetchUser(id) })
