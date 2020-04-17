import base from "../base";
import { Post } from "@/plugins/axios";

const USER_URL = "/user";

export const login = params => {
  return Post("/ylink/admin/user/login", params);
};
