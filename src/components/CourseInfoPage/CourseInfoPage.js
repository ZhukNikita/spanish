import styles from './CourseInfoPage.module.scss'
import NavBar from "../NavBar/NavBar";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AppsIcon from '@mui/icons-material/Apps';
import {useState} from "react";
import RateSlider from "../RateSlider/RateSlider";
import Footer from "../FooterComponent/Footer";
import {observer} from "mobx-react-lite";

 function CourseInfoPage({course}){
    const [seeMore , setMore] = useState(6)
    const onClick = ()=>{
        setMore(course.lessons.length)
    }
    return(
        <div className={styles.body}>
            <NavBar bcColor={'#179C54'} logo={2}/>
            <div>
                <div className={styles.header}>
                    <h2>{course.name.toUpperCase()}</h2>
                    <p>{course.expiredAt}</p>
                </div>
                <div className={styles.infoBlock}>
                    <h2><LightbulbIcon sx={{color:'#E8620C'}}/>Що будемо вивчати?</h2>
                    <p>{course.infoText}</p>
                </div>
                <div className={styles.plansBlock}>
                    <h2><AppsIcon sx={{color:'#E8620C'}}/>План уроків</h2>
                    <div style={{position:'relative'}}>
                        <ul className={styles.lessons} style={seeMore !== 6?{height:`calc(77.5px * ${course.lessons.length})`}:{height:"calc(79px * 6)" , overflow:'hidden'}}>
                            {
                                course.lessons.map(el=>
                                    <li key={el.id} style={seeMore === 6? el.id === 4 ? {opacity: '0.5'} : el.id === 5 ? {opacity: '0.4'} : el.id === 6 ? {opacity: '0.2'} : {} :{}}>
                                        <h5>Урок {el.id}</h5>
                                        <p>{el.text}</p>
                                    </li>)
                            }
                        </ul>
                        {
                            seeMore === 6?<div className={styles.button}><span onClick={onClick}>Дивитися повністю</span><hr/></div>
                            : <div className={styles.button} style={{marginTop:'15px'}}><span onClick={()=> setMore(6)}>Закрити</span><hr/></div>
                        }
                    </div>
                </div>
                <div className={styles.buttonBuy}>
                    <button className={styles.buy}>Придбай зараз!</button>
                </div>
                <div style={{overflow:'hidden'}} >
                    <RateSlider/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default observer(CourseInfoPage)