import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Ivoine",
    desc: "he/him",
    image: "ivoine.png",
  },
  {
    name: "Kaiwen",
    desc: "she/her",
    image: "kaiwen.jpg",
  },
  {
    name: "Emily",
    desc: "she/her",
    image: "emily.jpeg",
  },
  {
    name: "Sahana",
    desc: "she/her",
    image: "sahana.jpg",
  },
  {
    name: "Manish",
    desc: "he/him",
    image: "ivoine.png",
  }
];

const Team = () => {
  return (
    <div className="bg-[#B5FF9B] py-10">
        <div className="text-[#2A4720] text-center font-extrabold text-4xl">
          OUR TEAM
        </div>
      <div className="w-full">
        <div className="w-[100%] max-w-[756px] mx-auto space-y-6 md:space-x-4 flex items-end justify-around flex-wrap">
          {team.map((team, i) => (
            <div className="flex items-center space-x-4" key={i}>
              <Image
                src={`/team-members/${team.image}`}
                alt={`${team.name}'s profile picture`}
                width={80}
                height={80}
                className="rounded-full"
              />

              <div className="info">
                <h3 className="font-bold">{team.name}</h3>
                <h4 className="text-[#406932]">{team.desc}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
