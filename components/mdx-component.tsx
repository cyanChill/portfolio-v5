import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import ImageViewer from "./ImageViewer";

// Custom components we'll override with
const components = {
  Image,
  ImageViewer
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
