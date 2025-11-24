"use client";
import Image from "next/image";
import { useState } from "react";

export default function PropertyCard({
  image,
  title,
  rating,
  price,
  location,
  hostType,
}) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-2 relative">
      <div
        className="absolute p-4 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? (
          <div className="text-4xl">&#10083;</div>
        ) : (
          <div className="text-4xl">&#9825;</div>
        )}
      </div>
      <Image
        src={image}
        alt={title}
        width={300}
        height={100}
        className="rounded-lg"
      />
      <h2 className="font-semibold">{title}</h2>
      <div className="flex gap-2">
        <div>{price}</div>-<div>{location}</div>
      </div>
      <div className="flex gap-2">
        <div>{hostType}</div>-<div>&#128948;{rating}</div>
      </div>
    </div>
  );
}
