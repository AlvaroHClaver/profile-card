import type { IconType } from "react-icons";
import { SocialBadge } from ".";

type SocialBadgeItem = {
  icon: IconType;
  link: string;
};

type SocialBadgeListProps = {
  items: SocialBadgeItem[];
};

export const SocialBadgeList = ({ items }: SocialBadgeListProps) => {
  return (
    <section className="flex gap-3 justify-items-start w-[80%] mt-5">
      {items.map((item) => (
        <SocialBadge key={item.link} icon={item.icon} link={item.link} />
      ))}
    </section>
  );
};
