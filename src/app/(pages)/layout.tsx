import FooterOne from '@/components/footers/FooterOne';
import HeaderOne from '@/components/headers/HeaderOne';
import StrickyHeader from '@/components/headers/StrickyHeader';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            {children}
            <FooterOne />
            <StrickyHeader />
        </div>
    );
};

export default layout;
