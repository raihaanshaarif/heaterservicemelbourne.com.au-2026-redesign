import BlogDetailsMain from '@/features/blog/BlogDetailsMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import React from 'react';



const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Details' />
            <BlogDetailsMain />
        </>
    );
};

export default page;
