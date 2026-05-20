type MailToButtonProps = {
  email: string;
  label: string;
};

export const MailToButton = ({ email, label }: MailToButtonProps) => {
  return (
    <a
      className="w-(--content-width) mt-3 h-10 rounded-xl font-semibold bg-action-gradient flex items-center justify-center transition-opacity hover:opacity-80"
      href={`mailto:${email}`}
    >
      {label}
    </a>
  );
};
