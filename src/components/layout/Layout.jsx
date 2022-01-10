import React from 'react';

import Header from '../header/Header';
import Container from '../container/Container';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
