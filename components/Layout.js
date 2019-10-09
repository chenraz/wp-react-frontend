import React from 'react';

import Header from './Header';
import Footer from './Footer';

import MouseCursor from '../local-react-components/components/mouseCursor';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <MouseCursor />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
