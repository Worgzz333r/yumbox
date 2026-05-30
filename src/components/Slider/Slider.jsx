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

const slides = [
  { title: 'сет 21', price: '934 грн' },
  { title: 'сет 22', price: '1753 грн' },
  { title: 'сет 23', price: '1275 грн' },
]

function Slider() {
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
                    navigation={{
                        prevEl: '.slider-btn-prev',
                        nextEl: '.slider-btn-next',
                    }}

                    modules={[Navigation, Pagination]}

                    pagination={{ clickable: true }}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img className="slide-patch" src={patch} alt="patch image" />
                        <img className="slide-set" src={set} alt="set image" />

                        <div className="text-wrapper">
                            <img className="slide-vector" src={vector} alt="vector image" />
                            <img className="slide-text" src={text} alt="text image" />
                        </div>
                        <div className="slide_info">
                            <span>{slides[0].title}</span>
                            <span className="slide-price">{slides[0].price}</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slide-patch" src={patch} alt="patch image" />
                        <img className="slide-set" src={set} alt="set image" />

                        <div className="text-wrapper">
                            <img className="slide-vector" src={vector} alt="vector image" />
                            <img className="slide-text" src={text} alt="text image" />
                        </div>
                        <div className="slide_info">
                            <span>{slides[1].title}</span>
                            <span className="slide-price">{slides[1].price}</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slide-patch" src={patch} alt="patch image" />
                        <img className="slide-set" src={set} alt="set image" />

                        <div className="text-wrapper">
                            <img className="slide-vector" src={vector} alt="vector image" />
                            <img className="slide-text" src={text} alt="text image" />
                        </div>
                        <div className="slide_info">
                            <span>{slides[2].title}</span>
                            <span className="slide-price">{slides[2].price}</span>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default Slider