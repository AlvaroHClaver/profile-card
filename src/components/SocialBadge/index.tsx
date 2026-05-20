import type { IconType } from "react-icons";

type SocialBadgeProps = {
  icon: IconType;
  label: string;
  link: string;
};

export const SocialBadge = ({ icon: Icon, label, link }: SocialBadgeProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-badge-bg flex items-center justify-center text-2xl border border-badge-border rounded-full"
    >
      <Icon />
    </a>
  );
};
