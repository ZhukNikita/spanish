import styles from './Login.module.scss'
import {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Link, Navigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import NavBar from "../NavBar/NavBar";
 function Login(){
     const {store} = useContext(Context)
     const [email, setEmail] = useState('nikitazhuk99@icloud.com')
     const [password, setPassword] = useState('Nikita1234501')
     const [emailDirty, setEmailDirty] = useState(false)
     const [passwordDirty, setPasswordDirty] = useState(false)
     const [emailError, setEmailError] = useState('Будь ласка, введіть адресу електронної пошти.')
     const [passwordError, setPasswordError] = useState('Будь ласка, введіть пароль')
     if(store.isAuth){
             return <Navigate to='/courses'/>
     }


     const emailHandler = (e) => {
         setEmail(e.target.value)
         const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         if (!re.test(String(e.target.value).toLowerCase())) {
             setEmailError('Пошта не підходить.')
         } else {
             setEmailError('')
         }
     }
     const Check = () =>{
         setEmailDirty(true)
         setPasswordDirty(true)
         setEmailError('Будь ласка, введіть адресу електронної пошти.')
         setPasswordError('Будь ласка, введіть пароль.')
     }
     const passwordHandler = (e) => {
         setPassword(e.target.value)
         if (e.target.value.length < 5) {
             setPasswordError('Пароль замалий')
             if (!e.target.value) {
                 setPasswordError('Будь ласка, введіть пароль')
             }
         } else {
             setPasswordError('')
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
         }
     }
    return(
        <div className={styles.body}>
            <div className={styles.login}>
                <NavBar bcColor={'#179C54'} logo={2}/>

                {
                    store.errors && <div className={styles.errors}><CloseIcon color='error'/>{store.errors}</div>

                }
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

                </form>


                <div className={styles.links}>
                    <Link to='/forgotpass'>Забули пароль?</Link>
                    <Link to='/auth/registration'>Зареєструватися</Link>
                </div>
                {
                    !emailError && !passwordError ? <button onClick={()=>store.login(email,password)} style={{backgroundColor:'#179C54' , color:'#FFFCD2'}}>Увійти</button>
                    : <button onClick={Check}>Увійти</button>

                }

            </div>
        </div>
    )
}
export default observer(Login);
