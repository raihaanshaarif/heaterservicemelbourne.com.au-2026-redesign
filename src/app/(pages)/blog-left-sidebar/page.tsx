import BlogLeftSidebarMain from '@/features/blog/BlogLeftSidebarMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import React from 'react';



const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Left Sidebar' />
            <BlogLeftSidebarMain />
        </>
    );
};

export default page;
