import { businessWebDevServices } from "./Business/WebDevServices";
import { personalWebDevServices } from "./Personal/WebDevServices";
import { personalPCServices } from "./Personal/ComputerServices";
import type { Service } from "../Service";

export const fullServiceList: Service[] = [
  ...businessWebDevServices,
  ...personalWebDevServices,
  ...personalPCServices,
];