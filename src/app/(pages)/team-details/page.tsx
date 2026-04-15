import React from 'react';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import DetailsContact from '@/features/team-details/DetailsContact';
import MemberDetails from '@/features/team-details/MemberDetails';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Team Details' />
            <MemberDetails />
            <DetailsContact />
        </>
    );
};

export default page;
