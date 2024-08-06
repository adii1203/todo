/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import Task from "./task";
import { Id } from "@/convex/_generated/dataModel";

const Todos = () => {
  const todos = useQuery(api.todos.getAllTodos);

  const checkTodo = useMutation(api.todos.checkTodo);
  const ucCheckTodo = useMutation(api.todos.unCheckTodo);

  const handelCheck = async (isCompleted: boolean, todoId: Id<"todos">) => {
    if (isCompleted) {
      await ucCheckTodo({ todoId });
    } else {
      await checkTodo({ todoId });
    }
  };

  if (todos === undefined) return <div>Loading...</div>;

  return (
    <div>
      {todos.map((todo) => {
        return <Task handelCheck={handelCheck} data={todo} key={todo._id} />;
      })}
    </div>
  );
};

export default Todos;
