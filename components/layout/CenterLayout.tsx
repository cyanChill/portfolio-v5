type CenterLayoutProps = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
  overflowX?: boolean
};

export default function CenterLayout({
  children,
  className,
  main = false,
  overflowX = false,
}: CenterLayoutProps) {
  if (main) {
    return <main className={`w-full max-w-7xl relative ${!overflowX ? "overflow-x-hidden" : ""} ${className}`}>{children}</main>;
  }
  return <div className={`w-full max-w-7xl relative ${!overflowX ? "overflow-x-hidden" : ""} ${className}`}>{children}</div>;
}
