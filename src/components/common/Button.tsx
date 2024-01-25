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
    <button
      className={`px-8 py-2 animate-slidein cursor-pointer rounded-full hover:scale-105 transition duration-300 ease-in-out text-lg md:text-2xl  [--slidein-delay:300ms] ${variantResult()} ${className}`}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
