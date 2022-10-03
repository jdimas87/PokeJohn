import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import styles from '../assets/css/intro.module.css';

const Intro = () => {
  return (
    <Row className='py-5 my-5 justify-content-center'>
      <Col xs={10} sm={8}>
        <div className={`p-5 rounded ${styles.intro}`}>
          <h3>Welcome to <span className={styles.pokefont}>PokeJohn</span>!</h3>
          <p>
            Here you can browse through the various pokemon from all generations
            and learn about their stats, types, moves and much more!
          </p>
          <Link to='/pokemons'>
            <Button>Find out more!</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Intro;
