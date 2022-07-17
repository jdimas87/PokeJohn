import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../UI/header';
import Footer from '../UI/footer';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
