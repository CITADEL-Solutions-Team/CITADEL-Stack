import type { Service } from './service';
import { businessWebDevServices } from './lists/business/web-dev';
import { personalWebDevServices } from './lists/personal/web-dev';
import { personalPCServices } from './lists/personal/computer';

export const fullServiceList: Service[] = [
    ...businessWebDevServices,
    ...personalWebDevServices,
    ...personalPCServices,
];