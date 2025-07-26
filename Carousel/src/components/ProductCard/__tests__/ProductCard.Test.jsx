import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../ProductCard';

const mockProduct = {
    productHeader: "Kirkland",
    productSubHeader: "Spring Water",
    productUrl: '/product/123',
    imageSrc: 'https://domain.com/test.jpg',
    price: '44.99',
};

// 1st test to render if the product card actually renders as we expected

describe('Product Card Component', () => {
    test('Render Product Image', () => {
        render(
            <ProductCard
                product={mockProduct}
                productSubHeader={mockProduct.productSubHeader}
                productHeader={productHeader}
            />
        );

        const img = screen.getByRole('img', {name: /mock product/i });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockProduct.imageSrc);
        expect(img).toHaveAttribute('alt', 'Mock Product');
    });
})