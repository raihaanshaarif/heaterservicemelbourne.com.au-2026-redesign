import CartMain from '@/features/cart/CartMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Cart' />
            <CartMain />
        </>
    );
};

export default page;
