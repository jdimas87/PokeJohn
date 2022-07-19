import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Header from '../UI/header';
import Footer from '../UI/footer';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Container className='py-5'>
        <Row>
          <Outlet />
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
