import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const AllTheProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <CSSReset /> {children}
        </ThemeProvider>
    );
};
const customRender = (ui, options) =>
    render(ui, {
        wrapper: AllTheProviders,
        ...options,
    });

export * from '@testing-library/react';
export { customRender as render };
