interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <div className={`text-2xl  drop-shadow-md   leading-relaxed md:text-[32px] xl:text-[46px] sm:text-3xl font-medium tracking-wide   ${className}`}>{children}</div>;
};

export default Title;
