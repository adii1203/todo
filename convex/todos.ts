import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const addTodo = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    isCompleted: v.boolean(),
    dueDate: v.number(),
    priority: v.number(),
    labelId: v.optional(v.id("labels")),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    const todoId = await ctx.db.insert("todos", {
      title: args.title,
      description: args.description,
      isCompleted: false,
      dueDate: args.dueDate,
      priority: args.priority,
      userId: user?.subject as Id<"users">,
      labelId: args.labelId,
    });
    return todoId;
  },
});

export const getAllTodos = query({
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity();
    const todos = await ctx.db
      .query("todos")
      .filter((q) => q.eq(q.field("userId"), user?.subject))
      .collect();

    const todosWithLabels = await Promise.all(
      todos.map(async (todo) => {
        const label = todo.labelId ? await ctx.db.get(todo.labelId) : null;
        return { ...todo, label };
      })
    );

    return todosWithLabels;
  },
});

export const checkTodo = mutation({
  args: {
    todoId: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const newTodo = await ctx.db.patch(args.todoId, {
      isCompleted: true,
    });
    return newTodo;
  },
});

export const unCheckTodo = mutation({
  args: {
    todoId: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const newTodo = await ctx.db.patch(args.todoId, {
      isCompleted: false,
    });
    return newTodo;
  },
});
