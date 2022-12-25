import styles from './Registration.module.scss'
import {observer} from "mobx-react-lite";
import PasswordStrength from "./PasswordStrength";
import {useContext, useState} from "react";
import zxcvbn from "zxcvbn";
import {Context} from "../../index";
import {Link, Navigate} from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function RegistrationComponent() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false)
    const [emailError, setEmailError] = useState('Будь ласка, введіть адресу електронної пошти.')
    const [nameError, setNameError] = useState("Будь ласка, введіть ім'я.")
    const [passwordError, setPasswordError] = useState('Будь ласка, введіть пароль')
    const [passwordRepeatError, setPasswordRepeatError] = useState('Будь ласка, введіть пароль')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const result = zxcvbn(password)
    const {store} = useContext(Context)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Будь ласка, введіть адресу електронної пошти.')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5) {
            setPasswordError('Пароль не підходить')
            if (!e.target.value) {
                setPasswordError('Будь ласка, введіть пароль')
            }
        } else {
            setPasswordError('')
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value)
            if (!e.target.value) {
                setNameError("Будь ласка, введіть ім'я")
            }
         else {
                setNameError('')
            }
    }

    const passwordRepeatHandler = (e) => {
        setPasswordRepeat(e.target.value)
        if (!e.target.value) {
            setPasswordRepeatError('Будь ласка, введіть пароль')
        } else {
            if (password !== e.target.value) {
                setPasswordRepeatError('Паролі не збігаються')
            } else setPasswordRepeatError('')

        }
    }

    function StrengthPassLabel() {
        switch (result.score) {
            case 0 :
                return 'Дуже простий';
            case 1:
                return 'Простий';
            case 2 :
                return 'Середній';
            case 3:
                return 'Безпечний';
            case 4:
                return 'Блискучий';
            default:
                return 'none'
        }
    }

    const BlurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'passwordRepeat':
                setPasswordRepeatDirty(true)
                break
            case 'Name':
                setNameDirty(true)
                break
        }
    }
    if(store.isAuth){
        return <Navigate to='/courses'/>
    }
    return (
        <div className={styles.body}>
            <div className={styles.registration}>
                <NavBar bcColor={'#179C54'} logo={2}/>
                <form autoComplete='true'>
                    <div className={styles.email}>
                        <input
                            onBlur={e => BlurHandle(e)}
                            onChange={(e) => nameHandler(e)}
                            type="text"
                            name='Name'
                            className={nameDirty && nameError ? styles.inputError : ''}
                            placeholder="Ваше ім'я"
                        />
                        <label className={styles.emailLabel}>Ім'я</label>
                        {
                            nameDirty && nameError && <div className={styles.emailErrors}>{nameError}</div>

                        }
                    </div>
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
                    <div className={styles.password}>
                        <input
                            onBlur={e => BlurHandle(e)}
                            onChange={(e) => passwordHandler(e)}
                            className={passwordDirty && passwordError ? styles.inputError : ''}
                            type="password"
                            name='password'
                            autoComplete="on"
                            placeholder='Мінімум 5 символів'
                        />
                        <label className={styles.emailLabel}>Пароль</label>
                        {
                            passwordDirty && passwordError && <div className={styles.emailErrors}>{passwordError}</div>
                        }
                    </div>
                    <div className={styles.password}>
                        <input
                            onBlur={e => BlurHandle(e)}
                            onChange={(e) => passwordRepeatHandler(e)}
                            className={passwordRepeatDirty && passwordRepeatError ? styles.inputError : ''}
                            type="password"
                            name='passwordRepeat'
                            autoComplete="on"
                            placeholder='Мінімум 5 символів'
                        />
                        <label className={styles.emailLabel}>Повторити пароль</label>
                        {
                            passwordRepeatDirty && passwordRepeatError && <div className={styles.emailErrors}>{passwordRepeatError}</div>
                        }
                    </div>
                    <PasswordStrength StrengthPassLabel={StrengthPassLabel} result={result}/>
                </form>
                {password === passwordRepeat && password && email && result.score !== 0 ?
                    <button style={{backgroundColor: 'black', color: 'white'}} onClick={()=>store.registration(name , email, password)}>Зареєструватися</button>
                    : <button>Зареєструватися</button>
                }
                <Link to='/auth/login' className={styles.links}>Вже маю акаунт</Link>
            </div>
        </div>
    )
}

export default observer(RegistrationComponent)