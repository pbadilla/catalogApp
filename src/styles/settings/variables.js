const setMediaQuery = size => `@media (min-width: ${size}px)`;
const setOrientation = orientation => ` and (orientation: ${orientation})`;

const variables = {
  mediaQueries: {
    breakpoint320: setMediaQuery(320),
    breakpoint411: setMediaQuery(411),
    breakpoint600: setMediaQuery(600),
    breakpoint768: setMediaQuery(768),
    breakpoint900: setMediaQuery(900),
    breakpoint1024: setMediaQuery(1024),
    breakpoint1100: setMediaQuery(1100),
    breakpoint1280: setMediaQuery(1280),
    breakpoint1800: setMediaQuery(1800),
  },
  mediaQueriesAndOrientation: {
    breakpoint411lands: setMediaQuery(411) + setOrientation('landscape'),
    breakpoint411port: setMediaQuery(411) + setOrientation('portrait'),
    breakpoint600lands: setMediaQuery(600) + setOrientation('landscape'),
    breakpoint600port: setMediaQuery(600) + setOrientation('portrait'),
    breakpoint768lands: setMediaQuery(768) + setOrientation('landscape'),
    breakpoint768port: setMediaQuery(768) + setOrientation('portrait'),
    breakpoint900lands: setMediaQuery(900) + setOrientation('landscape'),
    breakpoint900port: setMediaQuery(900) + setOrientation('portrait'),
    breakpoint1024lands: setMediaQuery(1024) + setOrientation('landscape'),
    breakpoint1024port: setMediaQuery(1024) + setOrientation('portrait'),
    breakpoint1280lands: setMediaQuery(1280) + setOrientation('landscape'),
    breakpoint1280port: setMediaQuery(1280) + setOrientation('portrait'),
    breakpoint1800lands: setMediaQuery(1800) + setOrientation('landscape'),
    breakpoint1800port: setMediaQuery(1800) + setOrientation('portrait'),
  },
  devices: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '900px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '1600px',
    desktopM: '1920px',
    desktopL: '2560px',
  },
  fonts: {
    xs: '1rem',
    s: '1.2rem',
    sm: '1.4rem',
    m: '1.6rem',
    ml: '2rem',
    l: '2.4rem',
    lxl: '3.2rem',
    xl: '3.6rem',
    xxl: '4.2rem',
  },
  sizes: {
    sidebar: '324px',
    maxLayoutWidth: '1280px',
    xs: '1rem',
    s: '1.2rem',
    sm: '1.4rem',
    m: '1.6rem',
    ml: '2rem',
    l: '2.4rem',
    xl: '3.2rem',
    xxl: '3.6rem',
    xxxl: '4.2rem',
  },
};

export default variables;
