import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Layout = ({ children }: { children: React.ReactNode }) => <Wrapper>{children}</Wrapper>;

export default Layout;
