import styles from './NavBar.module.scss'
import logo1 from '../../img/Logo1.png'
import logo2 from '../../img/Logo2.png'
import MenuIcon from '@mui/icons-material/Menu';
import {observer} from "mobx-react-lite";
import MobileMenu from "../MobileMenu/MobileMenu";
import {useState} from "react";
import {Link} from "react-router-dom";

 function NavBar({bcColor , logo}) {
     const [isOpen , setIsOpen] = useState(false)

     return(
        <div className={styles.body}>
            <div className={styles.mobileNav} style={{backgroundColor: bcColor}}>
                <Link to='/courses'><img src={logo === 1?logo1:logo2} alt="logo" width='31%' height='31%'/></Link>
                <div></div>
                <MenuIcon sx={{width:'35px' , height:'35px' , color:'#FFFCD2'}} onClick={()=>setIsOpen(true)}/>
            </div>
            {
                isOpen && <MobileMenu setIsOpen={setIsOpen}/>
            }
        </div>
    )
}
export default observer(NavBar)