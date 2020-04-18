import base from "../base";
import { Post, Get } from "@/plugins/axios";

const USER_URL = "/user";

export const login = params =>
  Post(`${base.ADMIN_URL}${USER_URL}/login`, params);

export const simple = () => Get(`${base.ADMIN_URL}${USER_URL}/simple`);
