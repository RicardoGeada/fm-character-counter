import styles from './Header.module.scss';
import logo_light from '../../assets/images/logo-light-theme.svg';
import logo_dark from '../../assets/images/logo-dark-theme.svg';
import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className={styles["header"]}>
            <img src={theme == "light" ? logo_light : logo_dark} alt="logo" />
            <button className={styles["light-dark-toggle"]} onClick={toggleTheme}>
                <img src={theme == "light" ? moon : sun} alt="" />
            </button>
        </header>
    )
}

export default Header;