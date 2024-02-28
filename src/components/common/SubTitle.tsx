interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SubTitle = ({ children, className }: SubTitleProps) => {
  return (
    <div
      className={`text-[20px]  drop-shadow-md z-20 animate-slidein leading-relaxed md:leading-1 md:text-[26px] xl:text-[40px] sm:text-[25px] font-medium tracking-wide [--slidein-delay:500ms]  ${className}`}>
      {children}
    </div>
  );
};

export default SubTitle;
