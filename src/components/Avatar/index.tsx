type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <img
      src={src}
      className="absolute top-[var(--avatar-top)] left-[var(--avatar-left)] w-[var(--avatar-size)] h-[var(--avatar-size)] rounded-[50%] border-3 border-solid border-profile-bg shadow-2xl object-cover"
      alt={alt}
    />
  );
};
