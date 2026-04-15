import React from 'react';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import TeamMain from '@/features/team/TeamMain';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Team' />
            <TeamMain />
        </>
    );
};

export default page;
