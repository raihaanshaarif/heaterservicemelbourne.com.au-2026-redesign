import DefaultBanner from '@/features/default-banner/DefaultBanner';
import ProjectDetailsMain from '@/features/projects/ProjectDetailsMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Project Details' />
            <ProjectDetailsMain />
        </>
    );
};

export default page;
