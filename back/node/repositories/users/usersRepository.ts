import DB from '../../db'

export interface UserRow {
  first_name: string
  id: number
}

export const findUser = async (
  userId: number
): Promise<UserRow | undefined> => {
  const res = await DB.query<UserRow>(
    'SELECT first_name, id FROM users WHERE id=$1::int',
    [userId]
  )
  return res.rows[0]
}
