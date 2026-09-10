"use client";

import { useEffect, useRef, useState } from "react";

export function Avatar({ size = 260 }: { size?: number }) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // A 404 on /profile.jpg can fail before React hydrates and attaches the
    // synthetic onError listener (the native <img> starts fetching the
    // moment the SSR'd HTML is parsed), so the error event itself is often
    // missed. Check the already-settled state on mount as a fallback, on
    // top of the native listener below for errors that happen afterward.
    if (img.complete && img.naturalWidth === 0) {
      setErrored(true);
      return;
    }

    const handleError = () => setErrored(true);
    img.addEventListener("error", handleError);
    return () => img.removeEventListener("error", handleError);
  }, []);

  return (
    <div
      className="relative rounded-full p-1.5"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 180deg, var(--accent), var(--accent-light), var(--accent))",
      }}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-surface flex items-center justify-center">
        {!errored ? (
          // Plain img so the site works before profile.jpg is added, and
          // degrades gracefully via the checks above instead of a
          // build-time file check.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src="/profile.jpg"
            alt="Desmond Didacus — Software Developer"
            width={size}
            height={size}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl font-bold tracking-tight bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">
            DD
          </span>
        )}
      </div>
    </div>
  );
}
