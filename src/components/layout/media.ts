import breakpoints from './breakpoints';

export enum ScreenSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
}

const mediaStyles = {
    [ScreenSize.xs]: (styles) => `{
    ${styles}
  }`,
    [ScreenSize.sm]: (styles) => `@media only screen and (min-width: ${breakpoints.small}) {
    ${styles}
  }`,
    [ScreenSize.md]: (styles) => `@media only screen and (min-width: ${breakpoints.medium}) {
    ${styles}
  }`,
    [ScreenSize.lg]: (styles) => `@media only screen and (min-width: ${breakpoints.large}) {
    ${styles}
  }`,
    [ScreenSize.xl]: (styles) => `@media only screen and (min-width: ${breakpoints.xlarge}) {
    ${styles}
  }`,
};

export default mediaStyles;
