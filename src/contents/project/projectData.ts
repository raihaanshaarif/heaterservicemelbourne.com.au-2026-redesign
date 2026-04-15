import { AnimationVariant } from "@/components/elements/FadeInAdvanced";
import Project11 from '@/assets/images/project/project-1-1.jpg';
import Project12 from '@/assets/images/project/project-1-2.jpg';
import Project13 from '@/assets/images/project/project-1-3.jpg';
import Project14 from '@/assets/images/project/project-1-4.jpg'; 

export interface ProjectOneItem {
    id: number;
    variant: AnimationVariant | undefined;
    delay: number;
    img: string;
    subTitle: string;
    title: string;
    linkUrl: string;
}

export const projectsData: ProjectOneItem[] = [
    {
        id: 10,
        variant: "fadeInLeft",
        delay: 100,
        img: Project11.src,
        subTitle: 'Logistics',
        title: 'Quality Equipment',
        linkUrl: '/project-details'
    },
    {
        id: 20,
        variant: "fadeInLeft",
        delay: 300,
        img: Project12.src,
        subTitle: 'Logistics',
        title: 'International Shipping',
        linkUrl: '/project-details'
    },
    {
        id: 30,
        variant: "fadeInRight",
        delay: 600,
        img: Project13.src,
        subTitle: 'Logistics',
        title: 'Safety Gurranted',
        linkUrl: '/project-details'
    },
    {
        id: 40,
        variant: "fadeInRight",
        delay: 900,
        img: Project14.src,
        subTitle: 'Logistics',
        title: 'Product Distribution',
        linkUrl: '/project-details'
    },
]
