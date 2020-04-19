import { ADMIN_URL, URL } from "../base";
import { Post, Get } from "@/plugins/axios";

const PLAN_URL = "/plan";
const WORD_URL = "/word";

export const GetPlanList = () => Get(`${URL}${PLAN_URL}/list`);

export const GetWordListByPlanId = planId =>
  Get(`${ADMIN_URL}${PLAN_URL}/${planId}/word`);

export const GetWordList = () => Get(`${URL}${WORD_URL}/list/noplan`);
