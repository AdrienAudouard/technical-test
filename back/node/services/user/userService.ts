import { findUser, UserRow } from '../../repositories/users/usersRepository'
import { HttpError } from '../../types/httpError'
import { User } from '../../types/user'

const toUser = (userRow: UserRow): User => {
  return {
    firstName: userRow.first_name,
    id: userRow.id
  }
}

export const getUser = async (userId: number): Promise<User> => {
  const user = await findUser(userId)

  if (!user) {
    throw new HttpError(404, `User with id ${userId} not found`)
  }

  return toUser(user)
}
