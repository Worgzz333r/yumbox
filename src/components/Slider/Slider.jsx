import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../index.scss'
import './Slider.scss'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import set from '../../assets/set.png'
import patch from '../../assets/patch.png'
import vector from '../../assets/vector.png'
import text from '../../assets/text.png'
import text_mobile from '../../assets/text-mobile.png'

const slides = [
    { title: 'сет 21', price: '934 грн' },
    { title: 'сет 22', price: '1753 грн' },
    { title: 'сет 23', price: '1275 грн' },
]

function Slider() {
    const swiperRef = useRef(null)

    return (
        <div className={'container'}>
            <div className={'slider-wrapper'}>
                <button className="slider-btn-prev">
                    <img src={arrowLeft} alt="prev" />
                </button>
                <button className="slider-btn-next">
                    <img src={arrowRight} alt="next" />
                </button>

                <Swiper
                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                    navigation={{
                        prevEl: '.slider-btn-prev',
                        nextEl: '.slider-btn-next',
                    }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                        el: window.innerWidth <= 768 ? '.custom-pagination' : '.desktop-pagination'
                    }}
                    slidesPerView={1}>

                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img className="slide-patch" src={patch} alt="patch image" />
                            <img className="slide-set" src={set} alt="set image" />
                            <div className="text-wrapper">
                                <img className="slide-vector" src={vector} alt="vector image" />
                                <img className="slide-text" src={text} alt="text image" />
                            </div>
                            <img className="slide-text-mobile" src={text_mobile} alt="text mobile image" />
                            <div className="slide-info">
                                <span>{slide.title}</span>
                                <span className="slide-price">{slide.price}</span>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <div className="desktop-pagination"></div>  {/* десктоп */}

                <div className="slider-controls">
                    <button className="slider-btn-prev-mobile" onClick={() => swiperRef.current?.slidePrev()}>
                        <img src={arrowLeft} alt="prev" />
                    </button>
                    <div className="custom-pagination"></div>  {/* мобіл */}
                    <button className="slider-btn-next-mobile" onClick={() => swiperRef.current?.slideNext()}>
                        <img src={arrowRight} alt="next" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider