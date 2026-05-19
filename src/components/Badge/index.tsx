type BadgeProps = {
  topic: string;
};

export const Badge: React.FC<BadgeProps> = ({ topic }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-badge-bg border border-badge-border text-badge-font text-xs">
      {topic}
    </div>
  );
};
