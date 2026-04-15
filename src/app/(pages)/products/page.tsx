import DefaultBanner from '@/features/default-banner/DefaultBanner';
import ProductsMain from '@/features/products/ProductsMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Products' />
            <ProductsMain />
        </>
    );
};

export default page;
