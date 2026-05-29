import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Slider.scss'

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      <SwiperSlide>Слайд 1</SwiperSlide>
      <SwiperSlide>Слайд 2</SwiperSlide>
      <SwiperSlide>Слайд 3</SwiperSlide>
    </Swiper>
  )
}

export default Slider