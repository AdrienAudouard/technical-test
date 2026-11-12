import { fetcher } from './client'
import { User } from 'types/user'

export const fetchUser = (id: number) => fetcher<User>(`/users/${id}`)
