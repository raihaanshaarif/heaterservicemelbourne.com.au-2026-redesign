import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useTransportContext from '../context/useTransportContext';
interface SinglePageMenuItem {
    id: number;
    linkId: string;
    value: string;
}
const singlePageMenuListHomeOne: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "about", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "contact", value: "Contact" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]
const singlePageMenuListHomeThree: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "aboutThree", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "contactThree", value: "Contact" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]

type ScrollToSection = (id: string) => void;

const SinglePageManuList: React.FC = () => {
    const { activeSection, setIsMobileManu } = useTransportContext();
    const currentPath = usePathname();
    const scrollToSection: ScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 70; // adgust height
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };
    const handlemanu = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
        if (id) {
            e.preventDefault();
            scrollToSection(id);
            setIsMobileManu(false)
        }
    }
    return (
        <ul className="main-menu__list one-page-scroll-menu">
            {
                (currentPath === "/single-page-home-three" ? singlePageMenuListHomeThree : singlePageMenuListHomeOne).map((item: SinglePageMenuItem) => (
                    <li key={item?.id} className={`scrollToLink ${activeSection === item?.linkId ? "current" : ""}`}>
                        <Link href={`#${item?.linkId}`} onClick={(e) => {
                            handlemanu(e, item.linkId)
                        }}>{item?.value}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default SinglePageManuList;
