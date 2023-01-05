import styles from './RateSlider.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

export default () => {
    const slides = [
        {
            id: 1,
            price: '100$',
            name: 'Базовий'
        },
        {
            id: 2,
            name: 'Середній',
            price: '200$'
        },
        {
            id: 3,
            name: 'Великий',
            price: '400$'
        },
    ]
    return (
        <Swiper
            className={styles.body}
            spaceBetween={5}
            slidesPerView={2}
            initialSlide={1}
        >

            <SwiperSlide className={styles.slide}>
                <div className={styles.price}>
                    <p className={styles.name}>{slides[0]?.name}</p>
                    <h4 className={styles.priceText}>{slides[0]?.price}</h4>
                </div>
                <ul>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>

                </ul>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} style={{margin:'33px 0px'}}>
                <div className={styles.price}>
                    <p className={styles.name}>{slides[1]?.name}</p>
                    <h4 className={styles.priceText}>{slides[1]?.price}</h4>
                </div>
                <ul>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li style={{textDecoration:'line-through'}}><CancelIcon sx={{width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                </ul>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} style={{marginLeft:'0px'}}>
                <div className={styles.price}>
                    <p className={styles.name}>{slides[2]?.name}</p>
                    <h4 className={styles.priceText}>{slides[2]?.price}</h4>
                </div>
                <ul>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                    <li><CheckCircleIcon sx={{color:'#179C54' , width:'13px',height:'13px'}}/> Lorem ipsum dolor sit</li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
        </Swiper>
    );
};

// export default function RateSlider() {
//     const [animation , setAnimation] = useState('')
//
//     const slides = [
//         {
//             id: 1,
//             price: '100$',
//             name: 'Базовий'
//         },
//         {
//             id: 2,
//             name: 'Середній',
//             price: '200$'
//         },
//         {
//             id: 3,
//             name: 'Великий',
//             price: '400$'
//         },
//     ]
//
//     const [slideIndex, setSlideIndex] = useState(1)
//     function toNextSlide(){
//         const isLastSlide = slideIndex === slides.length - 1
//         if(isLastSlide) return setSlideIndex(0)
//         else setSlideIndex(slideIndex+1)
//         setAnimation(prevState => prevState + 150)
//     }
//     function toPrevSlide(){
//         const isFirstSlide = slideIndex === 0;
//         if(isFirstSlide) return setSlideIndex(slides.length - 1)
//         else setSlideIndex(slideIndex - 1)
//         setAnimation(prevState => prevState - 150)
//
//     }
//     return(
//         <div className={styles.body}>
//             <div className={styles.slider} style={{left:`${animation + 'px'}`}}>
//                 {slides[slideIndex-1]?.name?
//                     <div className={styles.slide}>
//                         <p>{slides[slideIndex-1]?.name}</p>
//                         <h4>{slides[slideIndex-1]?.price}</h4>
//                     </div>
//                     :
//                     <div className={styles.slide}>
//                         <p>{slides[2]?.name}</p>
//                         <h4>{slides[2]?.price}</h4>
//                     </div>
//                 }
//                 <div className={styles.slide}>
//                     <p>{slides[slideIndex]?.name}</p>
//                     <h4>{slides[slideIndex]?.price}</h4>
//                 </div>
//                 {slides[slideIndex+1]?.name?
//                     <div className={styles.slide}>
//                         <p>{slides[slideIndex+1]?.name}</p>
//                         <h4>{slides[slideIndex+1]?.price}</h4>
//                     </div>
//                     :
//                     <div className={styles.slide}>
//                         <p>{slides[0]?.name}</p>
//                         <h4>{slides[0]?.price}</h4>
//                     </div>
//                 }
//             </div>
//
//
//             {
//                 slides.length > 1 ?
//                     <div className={styles.buttons}>
//                         <div className={styles.SliderButton} onClick={toPrevSlide}></div>
//                         <div className={styles.SliderButton} onClick={toNextSlide}></div>
//                     </div> : ''
//             }
//         </div>
//     )
// }