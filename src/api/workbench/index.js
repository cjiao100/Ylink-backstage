import { ADMIN_URL } from "../base";
import { Get } from "@/plugins/axios";

const WORKBENCH_URL = "/workbench";

export const GetDataOfWeek = params =>
  Get(`${ADMIN_URL}${WORKBENCH_URL}/week`, params);
