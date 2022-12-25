import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Context} from "../../index";
import NavBar from "../NavBar/NavBar";
import styles from './RecoverPass.module.scss'
function RecoverPass(){
    const {store} = useContext(Context)
    const recoverLink = useParams().link
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false)
    const [passwordError, setPasswordError] = useState('Будь ласка, введіть пароль')
    const [passwordRepeatError, setPasswordRepeatError] = useState('Будь ласка, введіть пароль')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const navigate = useNavigate()
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

    const BlurHandle = (e) => {
        switch (e.target.name) {
            case 'password':
                setPasswordDirty(true)
                break
            case 'passwordRepeat':
                setPasswordRepeatDirty(true)
                break
        }
    }
    const Click = () =>{
        store.recoverPass(recoverLink , password)
        setTimeout(()=>{
            navigate('/auth/login')
        }, 3000)
    }
    return(
        <div className={styles.body}>
            <NavBar/>
            <div className={styles.recover}>
                <h2 className={styles.title}>Зміна пароля</h2>
                <form>
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
                </form>
                {passwordRepeatError ||passwordError ? <button>Змінити</button> :<button style={{backgroundColor:'#179C54' , color:'#FFFCD2'}} onClick={Click}>Змінити</button> }
            </div>
        </div>
    )
}
export default observer(RecoverPass)