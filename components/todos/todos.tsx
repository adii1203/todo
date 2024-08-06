"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";
import Task from "./task";

const Todos = () => {
  const todos = useQuery(api.todos.getAllTodos);

  if (todos === undefined) return <div>Loading...</div>;

  return (
    <div>
      {todos.map((todo) => {
        return <Task data={todo} key={todo._id} />;
      })}
    </div>
  );
};

export default Todos;
