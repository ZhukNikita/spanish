import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

export default function Footer() {
    return(
        <div className={styles.body}>
            <h4 className={styles.text}>
                Заповнюй форму реєстрації,
                щоб зв’язатися з нами!
            </h4>
            <Link to='/auth/registration' className={styles.register}>ЗАРЕЄСТРУВАТИСЯ</Link>
        </div>
    )
}