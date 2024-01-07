interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <div className={`text-2xl lg:text-4xl font-normal tracking-wide  ${className}`}>{children}</div>;
};

export default Title;
