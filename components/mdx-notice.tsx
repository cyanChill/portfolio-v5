export default function MdxNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-md border border-l-4 border-slate-800 p-2 my-5">
      {children}
    </div>
  );
}
