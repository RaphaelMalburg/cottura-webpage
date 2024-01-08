interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Description = ({ children, className }: DescriptionProps) => {
  return <div className={`text-lg lg:text-2xl font-normal tracking-wide  ${className}`}>{children}</div>;
};

export default Description;
