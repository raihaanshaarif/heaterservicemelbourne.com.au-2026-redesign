import DefaultBanner from '@/features/default-banner/DefaultBanner';
import WishlistMain from '@/features/wishlist/WishlistMain';
import React from 'react';


const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Wishlist' />
            <WishlistMain />
        </>
    );
};

export default page;
