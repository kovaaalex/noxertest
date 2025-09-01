import Button from "../Button/Button";
import close from '../../../public/assets/img/buttonIcons/close.svg';
import bigtgicon from '../../../public/assets/img/bigtgicon.svg';
import dropdown from '../../../public/assets/img/buttonIcons/dropdown.svg';
import points from '../../../public/assets/img/buttonIcons/points.svg';
import styles from './Nav.module.css'
const Nav = () => {
    return(
        <nav className={styles.nav}>
            <Button icon={close} children={<p>Закрыть</p>}/>
            <a className={styles.tg__channel} href="">
                <img src={bigtgicon} alt="tg" />
                <p>наш tg-канал</p>
            </a>
            <Button icon={dropdown} children={<img src={points} alt="points"/>}/>
        </nav>
    )
}
export default Nav;