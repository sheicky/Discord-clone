// Define database tables 

import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    messages: defineTable({
        sender: v.string(),
        content: v.string(),
    })
})
