export default function Section({
  id,
  className = "",
  children,
  as: Comp = "section",
  style,
}) {
  return (
    <Comp id={id} className={`section-pad relative ${className}`} style={style}>
      <div className="site-shell">{children}</div>
    </Comp>
  );
}
