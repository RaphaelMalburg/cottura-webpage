import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
};

const Button = ({ children, className, href, variant }: ButtonProps) => {
  const variantResult = () => {
    switch (variant) {
      case "primary":
        return "bg-Beige text-CooperDark";
      case "secondary":
        return "bg-Cooper text-Beige";
      case "tertiary":
        return "bg-Cooper text-Beige";
      default:
        return "bg-Beige text-Black";
    }
  };

  return (
    <button className={`px-8 py-2  cursor-pointer rounded-full transition duration-300 ease-in-out text-lg md:text-2xl  ${variantResult()} ${className}`}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
