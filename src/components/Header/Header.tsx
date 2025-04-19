import styles from './Header.module.scss';
import logo_light from '../../assets/images/logo-light-theme.svg';
// import logo_dark from '../../assets/images/logo-dark-theme.svg';
// import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg';


function Header() {

    
    return (
        <header className={styles["header"]}>
            <img src={logo_light} alt="logo" />
            <button className={styles["light-dark-toggle"]}>
                <img src={moon} alt="" />
            </button>
        </header>
    )
}

export default Header;