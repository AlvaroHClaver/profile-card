import { Badge } from ".";

type BadgeListProps = {
  items: string[];
};

export const BadgeList: React.FC<BadgeListProps> = ({ items }) => {
  return (
    <div className="flex gap-3 justify-items-start w-[var(--content-width)] mt-5 flex-wrap">
      {items.map((item) => (
        <Badge topic={item} key={item} />
      ))}
    </div>
  );
};
