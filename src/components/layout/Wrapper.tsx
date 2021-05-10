import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Wrapper = ({ children }: { children: React.ReactNode }) => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
