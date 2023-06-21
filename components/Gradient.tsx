import type { CSSProperties } from "react";

type GradTextProps = {
  content: string;
  fromClr?: string;
  toClr?: string;
  durationMS: number;
  delayMS: number;
};

export const GradText = ({
  content,
  fromClr = "#ff00e6",
  toClr = "#ff833d",
  durationMS,
  delayMS,
}: GradTextProps) => {
  return (
    <span
      style={
        {
          "--fromClr": fromClr,
          "--toClr": toClr,
          "--duration": `${durationMS}ms`,
          "--delay": `${delayMS}ms`,
        } as CSSProperties
      }
      data-content={content}
      className="relative before:absolute before:animate-[fadeIn_var(--duration)_ease-in-out_var(--delay)_reverse_forwards] before:content-[attr(data-content)]"
    >
      <span className="animate-[fadeIn_var(--duration)_ease-in-out_var(--delay)_forwards] bg-gradient-to-r from-[var(--fromClr)] to-[var(--toClr)] bg-clip-text text-transparent opacity-0">
        {content}
      </span>
    </span>
  );
};
