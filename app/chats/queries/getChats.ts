import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetChatsInput
  extends Pick<Prisma.ChatFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetChatsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: chats,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.chat.count({ where }),
      query: (paginateArgs) => db.chat.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      chats,
      nextPage,
      hasMore,
      count,
    }
  }
)
