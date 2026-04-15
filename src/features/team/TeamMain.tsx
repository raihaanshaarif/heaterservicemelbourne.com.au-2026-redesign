import React from 'react';

import Team21 from '@/assets/images/team/team-2-1.jpg';
import Team22 from '@/assets/images/team/team-2-2.jpg';
import Team23 from '@/assets/images/team/team-2-3.jpg';
import Team24 from '@/assets/images/team/team-2-4.jpg';
import Team25 from '@/assets/images/team/team-2-5.jpg';
import Team26 from '@/assets/images/team/team-2-6.jpg';
import Team27 from '@/assets/images/team/team-2-7.jpg';
import Team28 from '@/assets/images/team/team-2-8.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData; // The imported variable (e.g., Team21)
    socials: {
        facebook: string;
        twitter: string;
        pinterest: string;
        instagram: string;
    };
};

const teamData: TeamMember[] = [
    {
        id: 1,
        name: "Jessica Brown",
        role: "Founder",
        image: Team21,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 2,
        name: "James Fuller",
        role: "Senior Worker",
        image: Team22,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 3,
        name: "Jasmet Mangat",
        role: "Senior Associate",
        image: Team23,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 4,
        name: "Tim Southe",
        role: "Founder",
        image: Team24,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 5,
        name: "Alisa Fox",
        role: "Junior Worker",
        image: Team25,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 6,
        name: "Andre Staus",
        role: "Delivery Man",
        image: Team26,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 7,
        name: "Olivia Smith",
        role: "Founder",
        image: Team27,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    },
    {
        id: 8,
        name: "Sophia",
        role: "Delivery Man",
        image: Team28,
        socials: { facebook: "#", twitter: "#", pinterest: "#", instagram: "#" }
    }
];

const TeamMain: React.FC = () => {
    return (
        <section className="team-page">
            <div className="container">
                <div className="row">
                    {teamData.map((member: TeamMember) => (
                        <div key={member.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <Image src={member.image} width={300} height={320} alt={member.name} />
                                        <div className="team-two__social">
                                            <Link href="/team-details"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="/team-details"><i className="fab fa-twitter"></i></Link>
                                            <Link href="/team-details"><i className="fab fa-pinterest-p"></i></Link>
                                            <Link href="/team-details"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-two__content">
                                    <h3 className="team-two__name">
                                        <Link href="/team-details">{member.name}</Link>
                                    </h3>
                                    <p className="team-two__sub-title">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMain;
