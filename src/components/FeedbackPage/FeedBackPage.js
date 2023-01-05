import styles from './FeedbackPage.module.scss'
import {observer} from "mobx-react-lite";
import NavBar from "../NavBar/NavBar";
import {Swiper, SwiperSlide} from "swiper/react";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CircleIcon from '@mui/icons-material/Circle';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {FeedbackSkeleton} from "./FeedbackSkeleton";

function FeedBackPage({isLoading}){
    const {store} = useContext(Context);

    const [current , setCurrent] = useState(0)
    const feedbacks = [
        {
            id: 1,
            name: 'Masha',
            courseName: 'Курс',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. '
        },
        {
            id: 2,
            name: 'Sasha',
            courseName: 'Курс',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. '
        },
        {
            id: 3,
            name: 'Kasha',
            courseName: 'Курс',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. In laoreet orci non ipsum semper, at iaculis nisl placerat. Praesent felis elit, porttitor vel lectus quis, facilisis vestibulum neque. '
        },
        {
            id: 4,
            name: 'Nasha',
            courseName: 'Курс',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. '
        },
        {
            id: 5,
            name: 'Dasha',
            courseName: 'Курс',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ut velit sed maximus. Mauris molestie quis urna eget placerat. Pellentesque lacinia condimentum tortor sit amet scelerisque. '
        },
    ]
        useEffect(() => {
                store.getFeedbacks()
        }, []);


    return(
        <div className={styles.body}>
            <NavBar bcColor={'#179c54'} logo={2}/>
            <div className={styles.header}>
                <h3>Відгуки</h3>
            </div>
            <div className={styles.feedbacksBody}>
                <Swiper
                    slidesPerView={1}
                    initialSlide={0}
                    onSlideNextTransitionStart={()=>setCurrent(prevState => prevState + 1)}
                    onSlidePrevTransitionStart={()=>setCurrent(prevState => prevState - 1)}
                >

                    {
                       isLoading?[...Array(1)].map((el, index)=> <FeedbackSkeleton key={index}/>)
                           : store.feedbacks.map(el=>
                               <SwiperSlide key={el._id} style={{display:'flex',justifyContent:'center'}}>
                                   <div className={styles.slide}>
                                       <div className={styles.slideName}>
                                           <h4 className={styles.name}>{el.name}, {el.courseName}</h4>
                                       </div>
                                       <p className={styles.text}>{el.text}</p>
                                   </div>
                               </SwiperSlide>)
                    }
                </Swiper>
                <div className={styles.circles}>
                    {
                        isLoading?'':[...Array(store.feedbacks.length)].map((_ , index)=>
                            index === current?<CircleIcon key={index} sx={{height:'10px' , width:'10px' , color:'#E8620C'}}/>:<CircleIcon key={index} sx={{height:'10px' , width:'10px', color:'#E8620C' , opacity:'50%'}}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default observer(FeedBackPage)