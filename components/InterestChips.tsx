import { PillList } from "@/components/PillList";

type InterestChipsProps = {
  items: string[];
};

export function InterestChips({ items }: InterestChipsProps) {
  return <PillList items={items} aria-label="Interests" />;
}
