import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addTodo = mutation({
  args: {
    userId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    isCompleted: v.boolean(),
    dueDate: v.number(),
    priority: v.number(),
    labelId: v.optional(v.id("labels")),
  },
  handler: async (ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      title: args.title,
      description: args.description,
      isCompleted: false,
      dueDate: args.dueDate,
      priority: args.priority,
      userId: args.userId,
      labelId: args.labelId,
    });
    return todoId;
  },
});

export const getAllTodos = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const todos = await ctx.db
      .query("todos")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    return todos;
  },
});
