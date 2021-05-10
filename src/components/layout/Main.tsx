import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Main = ({ children }: { children: React.ReactNode }) => <MainWrapper>{children}</MainWrapper>;

export default Main;
