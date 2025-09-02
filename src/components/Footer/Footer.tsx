import account from '../../../public/assets/img/footer/account.svg';
import cart from '../../../public/assets/img/footer/cart.svg';
import catalog from '../../../public/assets/img/footer/catalog.svg';
import favorite from '../../../public/assets/img/footer/favorite.svg';
import home from '../../../public/assets/img/footer/home.svg';
import tg from '../../../public/assets/img/tg.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.prefooter}>
        <p>Разработано на платформе Noxer</p>
        <div className={styles.tg__bot}>
          <img src={tg} alt="tg" />
          <span>noxerai_bot</span>
        </div>
      </div>
      <ul>
        <li>
          <img src={home} alt="home" />
        </li>
        <li>
          <img src={catalog} alt="catalog" />
        </li>
        <li>
          <img src={favorite} alt="favourite" />
        </li>
        <li>
          <img src={cart} alt="cart" />
        </li>
        <li>
          <img src={account} alt="account" />
        </li>
      </ul>
      <div className={styles.line}></div>
    </footer>
  );
};
export default Footer;
