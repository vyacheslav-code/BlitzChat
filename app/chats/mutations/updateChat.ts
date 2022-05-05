import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateChat = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateChat),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const chat = await db.chat.update({ where: { id }, data })

    return chat
  }
)
