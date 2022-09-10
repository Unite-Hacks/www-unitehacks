import React from 'react';
import Image from 'next/image'
{/*const Mystyle = {
  backgroundSize:"auto",
  backgroundPosition:"center center",
  objectFit:"contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url("https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg")`
};

*/}
const team = [
    {
      name: '@Ivoine',
      desc: 'Founder/Lead Developer',
      
    },
    {
      name: '@Adithya',
      desc: 'Co-Founder/Finaical manager',
      image: 'adi.jpg'
    },
    {
      name: '@Emily',
      desc: 'Founder/Lead Developer',
    },
    {
      name: '@Sahana',
      desc: 'Founder/Lead Developer',
    },
    {
      name: '@Vidit',
      desc: 'Marketer',
    },
    {
      name: '@Kaiwen',
      desc: 'Founder/Lead Developer',
      image: 'something',
    },
    

]
const Team = () => {
  return (
    <>
      <div className='mt-5' id="team">
        <div className="team text-center font-extrabold text-white">
          MEET THE TEAM
        </div>
      </div>
      <div className='teamcontainer'> 
      <ul className="teamList">
        {team.map((team, i) => (
          <li className="teamMember bg-white" key={i}>
           {/*     <Image
                height={75}
                width={75}
                alt={`${team.name}'s profile picture`}
                src={`/team-members/${team.image}`}
                className="teamPFP"
              />
              */}

              <div className="info">
                <h3 className="teamName">{team.name}</h3>
                <h4 className="teamDesc">{team.desc}</h4>
              </div>
          
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default Team;
