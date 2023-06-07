import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import ImageViewer from "./ImageViewer";
import MdxNotice from "./mdx-notice";

type ComponentProps = {
  className?: string;
  [x: string]: any;
};

// Custom components we'll override with
const components = {
  // We default the page gutters to be 1.5rem
  h2: ({ className, ...props }: ComponentProps) => (
    <h2 className="border-b pb-1" {...props} />
  ),
  // We default the page gutters to be 1.5rem
  pre: ({ className, ...props }: ComponentProps) => (
    <pre className="scrollbar overflow-x-auto border border-slate-800 rounded-lg" {...props} />
  ),
  Image,
  ImageViewer,
  MdxNotice,
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
