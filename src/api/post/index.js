import { ADMIN_URL } from "../base";
import { Get } from "@/plugins/axios";

const POST_URL = "/post";
const TODO_URL = "/todo";

export const GetPostList = params =>
  Get(`${ADMIN_URL}${POST_URL}/list`, params);

export const GetHotPostList = params =>
  Get(`${ADMIN_URL}${POST_URL}/list/hot`, params);

export const GetHotTopicList = () => Get(`${ADMIN_URL}${POST_URL}/topic/hot`);

export const GetNewPostPerDay = () => Get(`${ADMIN_URL}${POST_URL}/day/post`);

export const GetNewTopicPerDay = () => Get(`${ADMIN_URL}${POST_URL}/day/topic`);

export const GetReportList = () => Get(`${ADMIN_URL}${TODO_URL}/report`);
