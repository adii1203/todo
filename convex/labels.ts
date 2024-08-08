import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
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

export const getLabels = query({
  handler: async (ctx) => {
    const userId = await handelUserId(ctx);
    if (!userId) throw new ConvexError("User is not authenticated");

    const labels = await ctx.db
      .query("labels")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();

    return labels;
  },
});

export const deleteLabel = mutation({
  args: { id: v.id("labels") },
  handler: async (ctx, args) => {
    const userId = await handelUserId(ctx);
    try {
      if (!userId) throw new ConvexError("User is not authenticated");

      await ctx.db.delete(args.id);
      return true;
    } catch (error) {
      return false;
    }
  },
});
