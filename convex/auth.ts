import { Auth } from "convex/server";
import { Id } from "./_generated/dataModel";

export async function getViewerId(ctx: { auth: Auth }) {
  const identity = await ctx.auth.getUserIdentity();
  if (identity === null) {
    return null;
  }
  return identity.subject as Id<"users">;
}

export const handelUserId = async (ctx: { auth: Auth }) => {
  const userId = await getViewerId(ctx);
  if (userId === null) {
    console.error("User is not authenticated");
  }
  return userId;
};
