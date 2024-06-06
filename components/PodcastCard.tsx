import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgURL,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className=" flex flex-col gap-2">
        <Image
          src={imgURL}
          width={175}
          height={175}
          className=" aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          alt="podcast img"
        />
        <div>
          <h1 className="text-16 truncate font-bold">
            {title}
          </h1>
          <h2 className="text-14 truncate font-normal text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
