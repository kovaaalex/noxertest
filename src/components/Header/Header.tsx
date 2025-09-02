import styles from './Header.module.css';
import battery from '../../../public/assets/img/battery.svg';
import wifi from '../../../public/assets/img/wifi.svg';
import connection from '../../../public/assets/img/connection.svg';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.time}>9:41</div>
      <div className={styles.mobile__group}>
        <img src={connection} alt="battery" />
        <img src={wifi} alt="battery" />
        <img src={battery} alt="battery" />
      </div>
    </header>
  );
};
export default Header;
