import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import ImageViewer from "./ImageViewer";
import MdxEmbedPDF from "./mdx-embedPDF";
import MdxNotice from "./mdx-notice";

type ComponentProps = {
  className?: string;
  [x: string]: any;
};

// Custom components we'll override with
const components = {
  h2: ({ className = "", ...props }: ComponentProps) => (
    <h2 className={`border-b pb-1 ${className}`} {...props} />
  ),
  h5: ({ className = "", ...props }: ComponentProps) => (
    <h5 className={`font-semibold text-gray-200 ${className}`} {...props} />
  ),
  pre: ({ className = "", ...props }: ComponentProps) => (
    <pre
      className={`scrollbar overflow-x-auto rounded-lg border border-slate-800 px-0 ${className}`}
      {...props}
    />
  ),
  Image,
  ImageViewer,
  Link,
  MdxEmbedPDF,
  MdxNotice,
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  // @ts-ignore: "components" is a valid valid
  return <Component components={components} />;
}
