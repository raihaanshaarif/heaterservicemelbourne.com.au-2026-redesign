"use client";
import React from 'react';
import SinglePageManuList from './SinglePageManuList';
import MultiPageManuList from './MultiPageManuList';
import { usePathname } from 'next/navigation';

const MainManuList: React.FC = () => {
    const currentPath = usePathname();
    const isSinglePage = currentPath.includes("single-page")

    if (isSinglePage) {
        return <SinglePageManuList />
    }

    return <MultiPageManuList />
};

export default MainManuList;
