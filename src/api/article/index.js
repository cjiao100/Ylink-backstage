import base from "../base";
import { Get } from "@/plugins/axios";

const ARTICLE_URL = "/article";

export const GetArticleList = params =>
  Get(`${base.ADMIN_URL}${ARTICLE_URL}/list`, params);

export const GetHotArticleList = params => {
  return Get(`${base.ADMIN_URL}${ARTICLE_URL}/list/hot`, params);
};
