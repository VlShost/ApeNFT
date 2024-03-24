import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import MindCard from '../MindCard';

import css from './MindMap.module.css';

const MindMap = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>MindMap</h2>
      <Swiper
        grabCursor={true}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
            grid: {
              rows: 2,
            },
          },
        }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Keyboard]}
      >
        <SwiperSlide>
          <MindCard
            title={'YAPE DROP'}
            text={
              'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MindCard
            title={'New Collection'}
            text={
              'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MindCard
            title={'Token'}
            text={
              'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <MindCard title={'Learn more in mind map'} />
        </SwiperSlide>
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

export default MindMap;
