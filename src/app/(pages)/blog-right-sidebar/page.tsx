import BlogRightSidebarMain from '@/features/blog/BlogRightSidebarMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import React from 'react';



const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Right Sidebar' />
            <BlogRightSidebarMain />
        </>
    );
};

export default page;
