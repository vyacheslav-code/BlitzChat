import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateChat = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateChat), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const chat = await db.chat.create({ data: input })

  return chat
})
