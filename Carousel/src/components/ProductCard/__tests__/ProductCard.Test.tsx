import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../ProductCard';

const mockProduct = {
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
                productSubHeader="Hand Cream"
                productHeader="Beauty Bang"
            />
        );

        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockProduct.imageSrc);
        expect(img).toHaveAttribute('alt', 'Beauty Bang');
    });
    
    // this test is important as we are parsing and spliting the productTitle => [productHeader, productSubHeader]
    test('Product Header and subHeader rendered correctly', () => {
        render(
            <ProductCard
                product={mockProduct}
                productSubHeader="Hand Cream"
                productHeader="Beauty Bang"
            />
        );
            expect(screen.getByText(/beauty bang/i)).toBeInTheDocument();
            expect(screen.getByText(/hand cream/i)).toBeInTheDocument();
    });

    // test for containing the href link since onClick we want to redirect to the product page
    test('Product contains the correct redirection link', () => {
        render(
            <ProductCard
                product={mockProduct}
                productSubHeader="Hand Cream"
                productHeader="Beauty Bang"
            />
        );  
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', mockProduct.productUrl);
    });
    test('render product price', () => {
        render(
            <ProductCard
                product={mockProduct}
                productSubHeader="Hand Cream"
                productHeader="Beauty Bang"
            />
        );  
        expect(screen.getByText('£44.99')).toBeInTheDocument();        
    });
})