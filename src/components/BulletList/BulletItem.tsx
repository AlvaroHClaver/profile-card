import type { IconType } from "react-icons";

type BulletItemProps = {
  icon: IconType;
  text: string;
};
export const BulletItem: React.FC<BulletItemProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center w-full gap-4">
      <Icon className="text-bullet-icon text-[20px]" />
      <span className="text-[14px] font-normal text-bullet-text">{text}</span>
    </div>
  );
};
