import {useContext, useState} from "react";
import {Context} from "../../index";
import {Link, Navigate} from "react-router-dom";
import styles from './Courses.module.scss'
import {observer} from "mobx-react-lite";
import NavBar from "../NavBar/NavBar";

function CoursesComponent() {
    const courses = [
        {
            coursesNumber : 0,
            name:'НАЗВА КУРСУ',
            link: '/course1'
        },
        {
            coursesNumber : 1,
            name:'НАЗВА КУРСУ',
            link: '/course2'

        },
        {
            coursesNumber : 2,
            name:'НАЗВА КУРСУ',
            link: '/course3'

        }
    ]
    const {store} = useContext(Context);


    return(
        <div className={styles.body}>
            <NavBar bcColor={'#E8620C'} logo={1}/>
            <h2 className={styles.title}>Hola, amigo! Обирай курс, який тебе цікавить:</h2>
            <div className={styles.courses}>
                {
                    courses.map(el=> <Link to={el.link} className={styles.course}  key={el.coursesNumber}>{el.name}</Link>)
                }
            </div>
        </div>
    )
}
export default observer(CoursesComponent)

// {store.user.courses?
//     store.user.courses.map(el=> <Link to={courses[el]?.link} className={styles.course}  key={courses[el]?.coursesNumber}>{courses[el]?.name}</Link>):''
// }