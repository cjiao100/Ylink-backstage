import base from "../base";
import { Get, Post } from "@/plugins/axios";

const ARTICLE_URL = "/article";

export const GetArticleList = params =>
  Get(`${base.ADMIN_URL}${ARTICLE_URL}/list`, params);

export const GetHotArticleList = params =>
  Get(`${base.ADMIN_URL}${ARTICLE_URL}/list/hot`, params);

export const PostArticle = params =>
  Post(`${base.ADMIN_URL}${ARTICLE_URL}/add`, params);
