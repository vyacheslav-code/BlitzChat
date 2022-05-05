import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetChat = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetChat), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const chat = await db.chat.findFirst({ where: { id } })

  if (!chat) throw new NotFoundError()

  return chat
})
