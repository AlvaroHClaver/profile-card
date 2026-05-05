import type { IconType } from "react-icons";
import { BulletItem } from "./BulletItem";

type BulletListItem = {
  icon: IconType;
  text: string;
};

type BulletListProps = {
  items: BulletListItem[];
};

export const BulletList = ({ items }: BulletListProps) => {
  return (
    <section className="w-[80%] mt-5">
      <ul className="space-y-4">
        {items.map((item) => (
          <BulletItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </section>
  );
};
