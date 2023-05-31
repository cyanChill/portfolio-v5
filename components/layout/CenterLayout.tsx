type CenterLayoutProps = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
  overflowX?: boolean;
};

export default function CenterLayout({
  children,
  className,
  main = false,
  overflowX = false,
}: CenterLayoutProps) {
  const layoutClass = `w-full max-w-7xl relative ${
    !overflowX ? "overflow-x-hidden" : ""
  } ${className}`;
  if (main) {
    return <main className={layoutClass}>{children}</main>;
  }
  return <div className={layoutClass}>{children}</div>;
}
