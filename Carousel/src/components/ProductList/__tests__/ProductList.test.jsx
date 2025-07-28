// tests => 1. render product cards (does it correctly map over)
// tests => 3. does it handle loading, errors, or empty states correctly

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductList } from '../ProductList';
import useProductData from '../../../hooks/useProductData'
import { parseProductTitle } from '../../../utils/parseProductTitle';


// Mocks
jest.mock('../../../hooks/useProductData', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('react-slick', () => {
  return ({ children }) => <div data-testid="mock-slider">{children}</div>;
});

jest.mock('../../../utils/parseProductTitle', () => ({
    parseProductTitle: jest.fn()
}));

jest.mock('../../ProductCard/ProductCard', () => (props) => {
    return(
        <div data-testid="product-card">
            <span>{props.productHeader}</span>
            <span>{props.productSubHeader}</span>
        </div>
    )
});

describe('ProductList', () => {
    beforeEach(() => {
        useProductData.mockReturnValue({
            products: [
                { productTitle: 'Evelyn - Cleanser', price: '29.99', productUrl: 'https://domain.com/evelyncleanser', imageSrc: 'evelyncleanser.png'},
                { productTitle: 'Hand - Gel', price: '99.99', productUrl: 'https://domain.com/handgel', imageSrc: 'handgel.png'},
            ],
            loading: false,
            error: null,
            refetch: jest.fn()
        });
        // test => does it correctly parse the productTitle and pass it through
        parseProductTitle.mockImplementation((title) => {
            const [header, subHeader] = title.split(' - ');
            return {header, subHeader};
        });
    });

    test('render ProductCards with parsed headers', () => {
        render(<ProductList />);  

        const cards = screen.getAllByTestId('product-card');
        expect(cards).toHaveLength(2);

        expect(screen.getByText('Evelyn')).toBeInTheDocument();
        expect(screen.getByText('Cleanser')).toBeInTheDocument();
        expect(screen.getByText('Hand')).toBeInTheDocument();
        expect(screen.getByText('Gel')).toBeInTheDocument();

    })
})

