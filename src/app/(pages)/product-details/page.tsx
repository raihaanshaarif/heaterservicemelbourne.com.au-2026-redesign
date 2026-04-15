import React from 'react';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import ProductCarousel from '@/features/product-details/ProductCarousel';
import ProductDescription from '@/features/product-details/ProductDescription';
import ProductDetailsMain from '@/features/product-details/ProductDetailsMain';


const ProductDetails: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Product Details' />
            <ProductDetailsMain />
            <ProductDescription />
            <ProductCarousel />
        </>
    );
};

export default ProductDetails;
