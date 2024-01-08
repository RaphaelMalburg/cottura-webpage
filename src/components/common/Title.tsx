interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <div className={`text-2xl   leading-tight md:text-[46px] font-medium tracking-wide   ${className}`}>{children}</div>;
};

export default Title;
