type CenterLayoutProps = {
  variant?: "div" | "main" | "header";
  children: React.ReactNode;
  className?: string;
  overflowX?: boolean;
};

export default function CenterLayout({
  variant = "main",
  children,
  className = "",
  overflowX = false,
}: CenterLayoutProps) {
  const layoutClass = `w-full max-w-7xl relative ${
    !overflowX ? "overflow-x-hidden" : ""
  } ${className}`;

  if (variant === "header") {
    return <header className={layoutClass}>{children}</header>;
  } else if (variant === "main") {
    return <main className={layoutClass}>{children}</main>;
  } else {
    return <div className={layoutClass}>{children}</div>;
  }
}
