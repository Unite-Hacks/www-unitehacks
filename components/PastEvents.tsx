import Image from "next/image";
import React from "react";

const photos = [
  {
    image: "team.jpg",
  },
  {
    image: "team2.jpg",
  },
  {
    image: "food.jpeg",
  },
];

const PastEvents = () => {
  return (
    <div className="md:w-[800px] screen mb-5">
      <div className="font-bold text-white mt-10 text-[42px]">
        Unite Hacks 2022
      </div>
      <div className="flex">
        <ul className="md:flex justify-center text-center gap-5">
          {photos.map((photo, i) => (
            <li className="mt-5 mb-2" key={i}>
              <a href="https://photos.google.com/u/0/share/AF1QipMsdWJCKa59ZUYIqNNs40YYJftKWbVxcqpUBD7HFxQnaVlUjruugBFi8kWROhcEvw?key=YzdMTTBQUzlYTl9SLXMtQlQwcUphaW81VFJTbDVR&pageId=none">
                <Image
                  src={`/assets/${photo.image}`}
                  alt="event"
                  width={350}
                  height={200}
                  className="rounded-md"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PastEvents;
