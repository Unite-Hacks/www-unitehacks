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
];

const Team = () => {
  return (
    <div>
      <div className="paytone sm:text-[54px] text-[24px] font-bold text-white  mt-5 text-center">OUR TEAM</div>
      <div className="teamcontainer">
        <ul className="teamList">
          {team.map((team, i) => (
            <li className="teamMember" key={i}>
              <Image
                src={`/team-members/${team.image}`}
                alt={`${team.name}'s profile picture`}
                width={80}
                height={80}
                className="rounded-full"
              />

              <div className="info">
                <h3 className="teamName">{team.name}</h3>
                <h4 className="teamDesc">{team.desc}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
