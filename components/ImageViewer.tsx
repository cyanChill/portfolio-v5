"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";

type ImageViewerProps = {
  images: { url: string; alt: string }[];
  gutter?: number;
};

export default function ImageViewer({ images, gutter = 0 }: ImageViewerProps) {
  const [selIdx, setSelIdx] = useState(0);

  return (
    <div>
      <Image
        src={images[selIdx].url}
        alt={images[selIdx].alt}
        width={1080}
        height={720}
        className="mx-auto my-4 max-h-96 w-fit rounded-lg object-contain"
      />
      <p className="my-2 text-sm italic">{images[selIdx].alt}</p>
      <div className="scrollbar my-4 flex gap-1 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={`mx-2 w-40 shrink-0 transition duration-300 ${
              idx !== selIdx ? "opacity-50 hover:opacity-100" : ""
            }`}
            onClick={() => setSelIdx(idx)}
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={300}
              height={300}
              className="m-0 aspect-video rounded-md object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
