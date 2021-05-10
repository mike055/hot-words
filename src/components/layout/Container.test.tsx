import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Container from './Container';

describe('Container Component', () => {
    afterEach(cleanup);

    it('should render children', () => {
        const { getByText } = render(<Container>Hello</Container>);
        expect(getByText('Hello')).toBeInTheDocument;
    });
});
