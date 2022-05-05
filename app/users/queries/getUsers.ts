import db from "db"
export default async function getUsers(query: string) {
  return await db.user.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  })
}
