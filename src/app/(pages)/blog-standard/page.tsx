import BlogStandartMain from '@/features/blog/BlogStandartMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog & News' />
            <BlogStandartMain />
        </>
    );
};

export default page;
