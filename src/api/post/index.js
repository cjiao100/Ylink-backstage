import base from "../base";
import { Get } from "@/plugins/axios";

const POST_URL = "/post";

export const GetPostList = params =>
  Get(`${base.ADMIN_URL}${POST_URL}/list`, params);

export const GetHotPostList = params =>
  Get(`${base.ADMIN_URL}${POST_URL}/list/hot`, params);

export const GetHotTopicList = () =>
  Get(`${base.ADMIN_URL}${POST_URL}/topic/hot`);
