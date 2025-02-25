import { ADMIN_URL, URL } from "../base";
import { Put, Get, Post, Delete } from "@/plugins/axios";

const PLAN_URL = "/plan";
const WORD_URL = "/word";

export const GetWordList = () => Get(`${URL}${WORD_URL}/list/noplan`);

export const GetPlanList = () => Get(`${URL}${PLAN_URL}/list`);

export const GetWordListByPlanId = planId =>
  Get(`${ADMIN_URL}${PLAN_URL}/${planId}/word`);

export const AddWordOnPlan = (planId, wordIdList) =>
  Put(`${ADMIN_URL}${PLAN_URL}/config/${planId}/add`, { wordList: wordIdList });

export const DeleteWordOnPlan = (planId, wordIdList) =>
  Put(`${ADMIN_URL}${PLAN_URL}/config/${planId}/delete`, {
    wordList: wordIdList
  });

export const SearchWord = word => Post(`${URL}/translate`, word);

export const CreateNewPLan = plan => Post(`${ADMIN_URL}${PLAN_URL}/add`, plan);

export const DeletePlan = planId =>
  Delete(`${ADMIN_URL}${PLAN_URL}/delete/${planId}`);
