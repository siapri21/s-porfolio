export default function Heading({
  as: Comp = "h2",
  eyebrow,
  children,
  className = "",
  align = "left",
}) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <Comp className="display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1]">
        {children}
      </Comp>
    </div>
  );
}
