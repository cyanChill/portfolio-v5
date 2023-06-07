import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import ImageViewer from "./ImageViewer";

type ComponentProps = {
  className?: string;
  [x: string]: any;
};

// Custom components we'll override with
const components = {
  // We default the page gutters to be 1.5rem
  pre: ({ className, ...props }: ComponentProps) => (
    <pre
      className="scrollbar w-full max-w-[calc(100vw-48px)] overflow-x-auto"
      {...props}
    />
  ),
  Image,
  ImageViewer,
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
