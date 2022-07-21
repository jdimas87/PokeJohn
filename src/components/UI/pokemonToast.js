import { Col, Toast, Button, Image } from 'react-bootstrap';
import toUpperCaseFirst from '../../helpers/toUpperCaseFirst';
import styles from '../../assets/css/pokemonToast.module.css';

import pokeball from '../../assets/img/pokeball.svg';

const PokemonToast = ({ name, url }) => (
  <Col xs={12} sm={6} md={4} lg={3} className='pb-5'>
    <Toast className={styles.toast}>
      <Toast.Header closeButton={false} className={styles.toast__header}>
        {toUpperCaseFirst(name)}
        <Image src={pokeball} className={styles.toast__header_img} />
      </Toast.Header>
      <Toast.Body className={styles.toast__body}>
        <Button className={styles.toast__button}>I choose you!</Button>
      </Toast.Body>
    </Toast>
  </Col>
);

export default PokemonToast;
