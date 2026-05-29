import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../index.scss'
import './Slider.scss'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

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
                        <img src="https://placehold.co/1275x500" alt="Слайд 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://placehold.co/1275x500" alt="Слайд 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://placehold.co/1275x500" alt="Слайд 1" />
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default Slider