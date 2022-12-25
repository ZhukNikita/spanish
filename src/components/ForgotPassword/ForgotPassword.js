import {observer} from "mobx-react-lite";
import NavBar from "../NavBar/NavBar";
import styles from './ForgotPass.module.scss'
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../index";
function ForgotPassword() {
    const {store} = useContext(Context)
    const [email, setEmail] = useState('nikitazhuk99@icloud.com')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Будь ласка, введіть адресу електронної пошти.')
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Пошта не підходить.')
        } else {
            setEmailError('')
        }
    }
    const BlurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
        }
    }
    return(
        <div>
            <NavBar/>
            <div className={styles.body}>
                <h2 className={styles.title}>Скинути пароль</h2>
                <p style={{padding:'0px 10px'}}>Введіть адресу електронної пошти, прив'язану до аккаунту. Ми відправимо інструкції з відновлення паролю на цю адресу.</p>
                <form autoComplete='true'>
                    <div className={styles.email}>
                        <input
                            onBlur={e => BlurHandle(e)}
                            onChange={(e) => emailHandler(e)}
                            type="text" name='email'
                            className={emailDirty && emailError ? styles.inputError : ''}
                            placeholder='example@spanish.com'
                        />
                        <label className={styles.emailLabel}>Пошта</label>
                        {
                            emailDirty && emailError && <div className={styles.emailErrors}>{emailError}</div>

                        }
                    </div>
                </form>
                {
                    !emailError && email? <Link className={styles.button} to='/sendMessage' onClick={()=>store.sendRecoverMessage(email)}>Змінити пароль</Link>
                        : <Link className={styles.button} to='#'>Змінити пароль</Link>
                }
            </div>
        </div>
    )
}
export default observer(ForgotPassword)