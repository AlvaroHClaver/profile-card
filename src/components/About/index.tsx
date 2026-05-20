type AboutProps = {
  name: string;
  role: string;
  description: string;
};

export const About = ({ name, role, description }: AboutProps) => {
  return (
    <section className="w-[80%] mt-18 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-details-text">{role}</p>
      </div>
      <p className="text-base leading-6.5">{description}</p>
    </section>
  );
};
