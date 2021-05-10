import React from 'react';
import styled from 'styled-components';

import media from './media';
import breakpoints from './breakpoints';

export const ContainerWrapper = styled.div`
    width: calc(100% - 1rem * 2);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    ${media['sm'](`
    max-width: ${breakpoints.container.desktop};
  `)}

    ${media['md'](`
    max-width: ${breakpoints.container.tablet};
  `)}

  ${media['lg'](`
    max-width:${breakpoints.container.desktop};
  `)}

  ${media['xl'](`
    max-width: ${breakpoints.container.desktopLarge};
  `)}
`;

const Container = ({ children }: { children: React.ReactNode }) => <ContainerWrapper>{children}</ContainerWrapper>;

export default Container;
