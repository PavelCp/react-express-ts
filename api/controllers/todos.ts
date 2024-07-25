import { Request, Response, NextFunction, RequestHandler } from "express";
import { Post } from "../models/post";

const TODOS: Post[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = req.body.text;
  const newTodo = new Post(Math.random().toString(), text, text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Create the todo", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string; text: string }> = (
  req,
  res,
  next
) => {
  const todoId = req.params.id;
  const updatedText = req.body.text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  TODOS[todoIndex] = new Post(TODOS[todoIndex].id, updatedText, updatedText);

  res.json({ message: "Updated!", updateTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  TODOS.splice(todoIndex, 1);
  res.json({ message: "Deleted" });
};
