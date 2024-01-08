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
        return "bg-CooperDark text-Beige";
      case "tertiary":
        return "bg-Cooper text-Beige";
      default:
        return "bg-Beige text-Black";
    }
  };

  return (
    <button className={`px-4 py-2 rounded cursor-pointer transition duration-300 ease-in-out text-lg md:text-2xl  ${variantResult()} ${className}`}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
