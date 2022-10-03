import { Spinner } from 'react-bootstrap';
import styles from '../../assets/css/loader.module.css';

const Loader = () => (
  <div className={styles.spinner_wrapper}>
    <Spinner
      animation='grow'
      variant='danger'
      style={{ width: '10rem', height: '10rem' }}
    />
  </div>
);

export default Loader;
