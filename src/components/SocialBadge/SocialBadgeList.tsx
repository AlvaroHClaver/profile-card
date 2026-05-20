import type { IconType } from "react-icons";
import { SocialBadge } from ".";

type SocialBadgeItem = {
  icon: IconType;
  label: string;
  link: string;
};

type SocialBadgeListProps = {
  items: SocialBadgeItem[];
};

export const SocialBadgeList = ({ items }: SocialBadgeListProps) => {
  return (
    <section className="flex gap-3 justify-items-start w-[var(--content-width)] mt-5">
      {items.map((item) => (
        <SocialBadge
          key={item.link}
          icon={item.icon}
          label={item.label}
          link={item.link}
        />
      ))}
    </section>
  );
};
