import { useState } from "react";

export default function PhoneFrame({
  src,
  alt = "",
  className = "",
}) {
  const [ok, setOk] = useState(Boolean(src));

  if (!src || !ok) {
    return (
      <div
        aria-hidden="true"
        className={`mx-auto flex h-[380px] w-[200px] items-center justify-center rounded-[2rem] border-[3px] border-ink/20 bg-cream/60 text-xs uppercase tracking-wider text-ink-subtle ${className}`}
      >
        Mobile preview
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-[min(220px,55%)] ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-ink shadow-[0_24px_50px_rgba(43,33,28,0.28)]">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <img
          src={src}
          alt={alt}
          className="aspect-[9/19] w-full object-cover object-top"
          loading="lazy"
          onError={() => setOk(false)}
        />
      </div>
    </div>
  );
}
