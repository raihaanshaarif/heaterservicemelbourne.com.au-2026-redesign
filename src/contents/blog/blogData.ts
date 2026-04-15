import Blog21 from '@/assets/images/blog/blog-2-1.jpg';
import BlogOneAuthorImg1 from '@/assets/images/blog/blog-one-author-img-1.jpg';
import Blog22 from '@/assets/images/blog/blog-2-2.jpg';
import BlogOneAuthorImg2 from '@/assets/images/blog/blog-one-author-img-2.jpg';
import Blog23 from '@/assets/images/blog/blog-2-3.jpg';
import BlogOneAuthorImg3 from '@/assets/images/blog/blog-one-author-img-3.jpg';
import Blog24 from '@/assets/images/blog/blog-2-4.jpg';
import BlogOneAuthorImg4 from '@/assets/images/blog/blog-one-author-img-4.jpg';
import Blog25 from '@/assets/images/blog/blog-2-5.jpg';
import BlogOneAuthorImg5 from '@/assets/images/blog/blog-one-author-img-5.jpg';
import Blog26 from '@/assets/images/blog/blog-2-6.jpg';
import BlogOneAuthorImg6 from '@/assets/images/blog/blog-one-author-img-6.jpg';

import BlogList11 from '@/assets/images/blog/blog-list-1-1.jpg';
import BlogList12 from '@/assets/images/blog/blog-list-1-2.jpg';
import BlogList13 from '@/assets/images/blog/blog-list-1-3.jpg';
import { StaticImageData } from 'next/image';

export interface BlogPost {
    id: number;
    image: string | StaticImageData;
    category: string;
    date: string;
    title: string;
    authorName: string;
    authorImage: string | StaticImageData;
    slug: string;
}

export const blogData: BlogPost[] = [
    {
        id: 1,
        image: Blog21,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Grow Your Following by the Building Cargo Service",
        authorName: "Janes Cooper",
        authorImage: BlogOneAuthorImg1,
        slug: "/blog-details"
    },
    {
        id: 2,
        image: Blog22,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Cargo Follow Through the Best Supply Your Metal",
        authorName: "Kevin Cooper",
        authorImage: BlogOneAuthorImg2,
        slug: "/blog-details"
    },
    {
        id: 3,
        image: Blog23,
        category: "Logistics",
        date: "May 10, 2025",
        title: "How Will You Know Success When it Show Up?",
        authorName: "Alisa Fox",
        authorImage: BlogOneAuthorImg3,
        slug: "/blog-details"
    },
    {
        id: 4,
        image: Blog24,
        category: "Logistics",
        date: "May 10, 2025",
        title: "How Will You Know Success When it Show Up?",
        authorName: "Robert Sons",
        authorImage: BlogOneAuthorImg4,
        slug: "/blog-details"
    },
    {
        id: 5,
        image: Blog25,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Mastering Last Mile Delivery Strategies for Success",
        authorName: "Tamanna Tamu",
        authorImage: BlogOneAuthorImg5,
        slug: "/blog-details"
    },
    {
        id: 6,
        image: Blog26,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Logistics Announces Launch of Greenhouse Gas",
        authorName: "Faisa Haris",
        authorImage: BlogOneAuthorImg6,
        slug: "/blog-details"
    },
    {
        id: 7,
        image: Blog23,
        category: "Logistics",
        date: "May 10, 2025",
        title: "How Will You Know Success When it Show Up?",
        authorName: "Alisa Fox",
        authorImage: BlogOneAuthorImg3,
        slug: "/blog-details"
    },
    {
        id: 8,
        image: Blog24,
        category: "Logistics",
        date: "May 10, 2025",
        title: "How Will You Know Success When it Show Up?",
        authorName: "Robert Sons",
        authorImage: BlogOneAuthorImg4,
        slug: "/blog-details"
    },
    {
        id: 9,
        image: Blog25,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Mastering Last Mile Delivery Strategies for Success",
        authorName: "Tamanna Tamu",
        authorImage: BlogOneAuthorImg5,
        slug: "/blog-details"
    },
    {
        id: 10,
        image: Blog26,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Logistics Announces Launch of Greenhouse Gas",
        authorName: "Faisa Haris",
        authorImage: BlogOneAuthorImg6,
        slug: "/blog-details"
    },
    {
        id: 11,
        image: Blog22,
        category: "Logistics",
        date: "May 10, 2025",
        title: "Cargo Follow Through the Best Supply Your Metal",
        authorName: "Kevin Cooper",
        authorImage: BlogOneAuthorImg2,
        slug: "/blog-details"
    },
];


export interface BlogStandardPost {
    id: number;
    image: string | StaticImageData; // Or string if using paths
    day: string;
    month: string;
    author: string;
    commentsCount: number;
    readTime: string;
    title: string;
    text: string;
    link: string;
}

// Create the array
export const blogStandardData: BlogStandardPost[] = [
    {
        id: 1,
        image: BlogList11,
        day: "12",
        month: "Nov",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "We Ensures That Best Quality Logistic Services Provides.",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 2,
        image: BlogList12,
        day: "15",
        month: "Aug",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "The Advantages of a Digital Supply Strategy",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 3,
        image: BlogList13,
        day: "22",
        month: "Feb",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "Logistics Announces Launch of The Safe Greenhouse Gas",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 4,
        image: BlogList11,
        day: "12",
        month: "Nov",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "We Ensures That Best Quality Logistic Services Provides.",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
    {
        id: 5,
        image: BlogList12,
        day: "15",
        month: "Aug",
        author: "Admin",
        commentsCount: 5,
        readTime: "4 Min Read",
        title: "The Advantages of a Digital Supply Strategy",
        text: "Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog-details"
    },
];


