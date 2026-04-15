

import React from 'react';
import ContactMain from '@/features/contact/ContactMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Tanspot - Logistics and Transportation NextJS Template",
}

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Contact' />
            <ContactMain />
        </>
    );
};

export default page;
