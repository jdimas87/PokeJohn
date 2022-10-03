import { Row, Col, Image } from 'react-bootstrap';

import styles from '../assets/css/pageNotFound.module.css';

import pokeballOpen from '../assets/img/pokeball-open.png';

const PageNotFound = () => (
  <Row className='pt-5 justify-content-center'>
    <Col xs={10} sm={8} className='text-center'>
      <h1 className={styles.pageNotFound__h1}>404</h1>
      <Image src={pokeballOpen} className={styles.pageNotFound__img} />
      <h3 className='mt-5'>Wild Page Fled!</h3>
    </Col>
  </Row>
);

export default PageNotFound;
