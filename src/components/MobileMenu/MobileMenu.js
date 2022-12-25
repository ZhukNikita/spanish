import styles from './Mobile.module.scss'
import CancelIcon from '@mui/icons-material/Cancel';
import {Link, Navigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

function MobileMenu({setIsOpen}) {
    const {store} = useContext(Context);
    const logout = () =>{
        store.logout()
        setIsOpen(false)
    }
    return(
        <div className={styles.body}>
            <div className={styles.links}>
                { store.isAuth && <h2>Привіт, {store.user.name}!</h2>}
                <Link to='/courses' onClick={()=>setIsOpen(false)}>Усі курси</Link>
                <Link to={store.isAuth?'/cabinet':'/auth/login'} onClick={()=>setIsOpen(false)}>Мій кабінет</Link>
                <Link to='/AboutUs' onClick={()=>setIsOpen(false)}>Про нас</Link>
                <Link to='/Questions' onClick={()=>setIsOpen(false)}>Відгуки</Link>
                {
                    store.isAuth? <button onClick={logout}>Вийти</button>
                        : <Link to='/auth/login'>Увійти</Link>

                }
            </div>
            <CancelIcon style={{ marginTop: '30px' , color:'white' , height: '70px', width:'70px'}} onClick={()=>setIsOpen(false)}/>
        </div>
    )
}
export default observer(MobileMenu)