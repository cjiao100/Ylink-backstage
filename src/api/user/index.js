import { ADMIN_URL } from "../base";
import { Post, Get } from "@/plugins/axios";

const USER_URL = "/user";

export const login = params => Post(`${ADMIN_URL}${USER_URL}/login`, params);

export const simple = () => Get(`${ADMIN_URL}${USER_URL}/simple`);

export const GetUserList = params =>
  Get(`${ADMIN_URL}${USER_URL}/list`, params);
