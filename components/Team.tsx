import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Ivoine",
    image: "ivoine.jpg",
  },
  {
    name: "Adithya",
    image: "adi.jpeg",
  },
  {
    name: "Emily",
    image: "emily.png",
  },
  {
    name: "Sahana",
    image: "sahana.jpg",
  },
  {
    name: "Vidit",
    image: "vidit.jpg",
  },
  {
    name: "Kaiwen",
    image: "kaiwen.jpg",
  },
  {
    name: "Ansh",
    image: "ansh.png",
  },
  {
    name: "Arnav",
    image: "arnav.png",
  },
  {
    name: "Ashwin",
    image: "ashwin.jpg",
  },
  {
    name: "Mukesh",
    image: "mukesh.jpeg",
  },
];
const Team = () => {
  return (
    <div className="mt-10">
      <div className="stroketext text-center text-[72px] font-bold">
        MEET THE TEAM
      </div>
      <div className='teamcontainer'>
        <ul className="teamList">
          {team.map((team, i) => (
            <li className="teamMember" key={i}>
              <Image
                src={`/team-members/${team.image}`}
                alt={`${team.name}'s profile picture`}
                width={80}
                height={80}
                className="rounded-md"
              />

              <div className="info">
                <h3 className="teamName text-white">{team.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
