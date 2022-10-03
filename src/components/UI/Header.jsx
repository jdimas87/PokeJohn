import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/css/header.module.css';

const Header = () => {
  return (
    <Container fluid className={`${styles.header} py-5 text-center`}>
      <Row>
        <Col>
          <Link to='/' className={styles.header__a}>
            <h1 className={styles.header__h1}>PokeJohn</h1>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
