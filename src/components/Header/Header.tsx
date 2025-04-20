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
            <img className={styles["logo"]} src={theme == "light" ? logo_light : logo_dark} alt="character counter logo" />
            <button className={styles["light-dark-toggle"]} onClick={toggleTheme} aria-label={`Toggle to ${theme} mode.`}>
                <img src={theme == "light" ? moon : sun} alt="" />
            </button>
        </header>
    )
}

export default Header;