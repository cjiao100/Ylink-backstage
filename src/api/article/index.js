import { ADMIN_URL } from "../base";
import { Get, Post } from "@/plugins/axios";

const ARTICLE_URL = "/article";

export const GetArticleList = params =>
  Get(`${ADMIN_URL}${ARTICLE_URL}/list`, params);

export const GetHotArticleList = params =>
  Get(`${ADMIN_URL}${ARTICLE_URL}/list/hot`, params);

export const PostArticle = params =>
  Post(`${ADMIN_URL}${ARTICLE_URL}/add`, params);
