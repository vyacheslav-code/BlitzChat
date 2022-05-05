import { useQuery } from "blitz"
import getUsers from "../../users/queries/getUsers"

export const useUsersSearch = (query: string) => {
  const [users] = useQuery(getUsers, query)
  return users
}
