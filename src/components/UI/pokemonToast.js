import { Col, Toast, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/pokemonToast.module.css';

import pokeball from '../../assets/img/pokeball.svg';

const PokemonToast = ({ name, id }) => (
  <Col xs={12} sm={6} md={4} lg={3} className='pb-5'>
    <Toast className={styles.toast}>
      <Toast.Header closeButton={false} className={styles.toast__header}>
        {name}
        <Image src={pokeball} className={styles.toast__header_img} />
      </Toast.Header>
      <Toast.Body className={styles.toast__body}>
        <Link to={`/pokemons/${id}`} className={styles.toast__button}>
          I choose you!
        </Link>
      </Toast.Body>
    </Toast>
  </Col>
);

export default PokemonToast;
