interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Description = ({ children, className }: DescriptionProps) => {
  return <div className={`text-[16px] lg:text-xl font-normal tracking-wide animate-slidein [--slidein-delay:500ms] ${className}`}>{children}</div>;
};

export default Description;
