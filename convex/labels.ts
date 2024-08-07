import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";
import { handelUserId } from "./auth";

export const addLabel = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await handelUserId(ctx);
    if (!userId) throw new ConvexError("User is not authenticated");
    const labelId = await ctx.db.insert("labels", {
      name: args.name,
      userId,
      type: "users",
    });
    return labelId;
  },
});
