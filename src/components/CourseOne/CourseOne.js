import styles from './CourseOne.module.scss'
import NavBar from "../NavBar/NavBar";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AppsIcon from '@mui/icons-material/Apps';
import {useState} from "react";
import RateSlider from "../RateSlider/RateSlider";
import Footer from "../FooterComponent/Footer";

export default function CourseOne(){
    const [seeMore , setMore] = useState(6)
    const lessons = [
        {
            id: 1,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 2,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 3,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 4,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 5,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 6,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
        {
            id: 7,
            text: 'Aлфавіт, звуки, наголоси, рід, число та артиклі.'
        },
    ]
    const onClick = ()=>{
        setMore(lessons.length)
    }
    return(
        <div className={styles.body}>
            <NavBar bcColor={'#179C54'} logo={2}/>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>НАЗВА КУРСУ</h2>
                    <p>тривалість курсу</p>
                </div>
                <div className={styles.infoBlock}>
                    <h2><LightbulbIcon sx={{color:'#E8620C'}}/>Що будемо вивчати?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. In laoreet orci non ipsum semper, at iaculis nisl placerat. Praesent felis elit, porttitor vel lectus quis, facilisis vestibulum neque. Nam cursus enim leo, et dignissim felis molestie ac. In laoreet nulla eu dolor tincidunt convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div className={styles.plansBlock}>
                    <h2><AppsIcon sx={{color:'#E8620C'}}/>План уроків</h2>
                    <div style={{position:'relative'}}>
                        <ul className={styles.lessons}>
                            {
                                lessons.slice(0,seeMore).map(el=>
                                    <li key={el.id} style={seeMore === 6? el.id === 4 ? {opacity: '0.5'} : el.id === 5 ? {opacity: '0.4'} : el.id === 6 ? {opacity: '0.2'} : {} :{}}>
                                        <h5>Урок {el.id}</h5>
                                        <p>{el.text}</p>
                                    </li>)
                            }
                        </ul>
                        {
                            seeMore === 6?<div className={styles.button}><button onClick={onClick}>Дивитися повністю</button><hr/></div>
                            : <div className={styles.button} style={{marginTop:'15px'}}><button onClick={()=> setMore(6)}>Закрити</button><hr/></div>
                        }
                    </div>
                </div>
                <div className={styles.buttonBuy}>
                    <button className={styles.buy}>Придбай зараз!</button>
                </div>
                <RateSlider/>
                <Footer/>
            </div>
        </div>
    )
}