import { ADMIN_URL } from "../base";
import { Get, Post, Delete, Put } from "@/plugins/axios";

const WORKBENCH_URL = "/workbench";
const TODO_URL = "/todo";

export const GetDataOfWeek = params =>
  Get(`${ADMIN_URL}${WORKBENCH_URL}/week`, params);

export const GetTodoList = () => Get(`${ADMIN_URL}${TODO_URL}/list`);

export const AddTodo = params => Post(`${ADMIN_URL}${TODO_URL}/add`, params);

export const DeleteTodo = todoId => Delete(`${ADMIN_URL}${TODO_URL}/${todoId}`);

export const CompleteTodo = todoId => Put(`${ADMIN_URL}${TODO_URL}/${todoId}`);
