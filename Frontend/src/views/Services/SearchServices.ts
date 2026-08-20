// SearchServices.ts
import type { Service } from "@/views/Services/Service";
import { fullServiceList } from "@/views/Services/ServiceLists/AllServices";

export function filterServices(
  query: string,
  categories: Service["category"][] = [],
  audiences: Service["audience"][] = []
): Service[] {
  const normalizedQuery = query.trim().toLowerCase();

  return fullServiceList.filter(s => {
    if (categories.length > 0 && !categories.includes(s.category)) return false;
    if (audiences.length > 0 && !audiences.includes(s.audience)) return false;

    if (!normalizedQuery) return true;

    const haystack = [
      s.name,
      s.description,
      s.group,
      ...s.tags
    ].join(" ").toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}