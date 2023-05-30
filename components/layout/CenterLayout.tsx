type CenterLayoutProps = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
};

export default function CenterLayout({
  children,
  className,
  main = false,
}: CenterLayoutProps) {
  if (main) {
    return <main className={`w-full max-w-7xl ${className}`}>{children}</main>;
  }
  return <div className={`w-full max-w-7xl ${className}`}>{children}</div>;
}
