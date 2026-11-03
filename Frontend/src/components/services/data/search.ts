import type { Service } from './service';
import { fullServiceList } from './all-services';

export function filterServices(
    query: string,
    categories: Service['category'][] = [],
    audiences: Service['audience'][] = [],
): Service[] {
    const normalizedQuery: string = query.trim().toLowerCase();

    return fullServiceList.filter((s: Service) => {
        if (categories.length > 0 && !categories.includes(s.category)) return false;
        if (audiences.length > 0 && !audiences.includes(s.audience)) return false;
        if (!normalizedQuery) return true;

        const haystack: string = [s.name, s.description, s.group, ...s.tags].join(' ').toLowerCase();
        return haystack.includes(normalizedQuery);
    });
}