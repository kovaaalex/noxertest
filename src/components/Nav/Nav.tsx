import Button from '../Button/Button';
import close from '../../../public/assets/img/buttonIcons/close.svg';
import back from '../../../public/assets/img/buttonIcons/back.svg';
import bigtgicon from '../../../public/assets/img/bigtgicon.svg';
import dropdown from '../../../public/assets/img/buttonIcons/dropdown.svg';
import points from '../../../public/assets/img/buttonIcons/points.svg';
import styles from './Nav.module.css';
import type { NavProps } from '../../types/nav.types';

const Nav: React.FC<NavProps> = ({ isSearchActive = false, onCloseSearch }) => {
  return (
    <nav className={styles.nav}>
      {isSearchActive ? (
        <Button icon={back} children={<p>Назад</p>} onClick={onCloseSearch} />
      ) : (
        <Button icon={close} children={<p>Закрыть</p>} />
      )}
      <a className={styles.tg__channel} href="https://t.me/noxerai_bot">
        <img src={bigtgicon} alt="tg" />
        <p>наш tg-канал</p>
      </a>
      <Button icon={dropdown} children={<img src={points} alt="points" />} />
    </nav>
  );
};
export default Nav;
