import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

import css from './Arts.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import images from '../../data/collection.json';

const Arts = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Collection</h2>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
        breakpoints={{
          360: {
            slidesPerView: 'auto',
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 24,
            grid: {
              rows: 2,
            },
          },
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        modules={[Navigation, Keyboard]}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className={css.slider}>
            <img
              className={css.img}
              srcSet={`${item.image1x} 1x, ${item.image2x} 2x`}
              src={item.image2x}
              loading="lazy"
              alt="ape image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.btnWrapper}>
        <button type="button" id="prevBtn" className={css.btn}>
          Prev
        </button>

        <button type="button" id="nextBtn" className={css.btn}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Arts;
