import DefaultBanner from '@/features/default-banner/DefaultBanner';
import ProjectsMain from '@/features/projects/ProjectsMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Projects' />
            <ProjectsMain />
        </>
    );
};

export default page;
