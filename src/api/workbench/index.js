import base from "../base";
import { Get } from "@/plugins/axios";

const WORKBENCH_URL = "/workbench";

export const GetDataOfWeek = params =>
  Get(`${base.ADMIN_URL}${WORKBENCH_URL}/week`, params);
