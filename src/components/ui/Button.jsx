import { forwardRef } from "react";

const variants = {
  primary:
    "bg-terracotta-deep text-cream hover:bg-ink",
  secondary:
    "border border-ink/20 text-ink hover:border-terracotta hover:text-terracotta-deep bg-transparent",
  ghost:
    "text-ink-muted hover:text-terracotta-deep underline-offset-4 hover:underline",
};

const Button = forwardRef(function Button(
  {
    as: Comp = "a",
    variant = "primary",
    className = "",
    children,
    ...props
  },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ease-out ${variants[variant]} ${className}`}
      data-cursor="interactive"
      {...props}
    >
      {children}
    </Comp>
  );
});

export default Button;
