import React, { useState } from 'react';
import classnames from 'classnames';
import type SwiperType from 'swiper';
import { Mousewheel, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import default_poster from '../../../assets/svg/default_poster.svg';
import { BookImage } from '../../../types';
import { ProgressiveImage } from '../../common/progressive-image';

import './swiper.scss';
import styles from './PosterSlider.module.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';

interface PosterSliderProps {
  posters: BookImage[] | null;
}

export const PosterSlider = ({ posters }: PosterSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const complexStyles = {
    mainSwiper: classnames(styles.swiper, styles['swiper-main']),
    subSwiper: classnames(styles.swiper, styles['swiper-sub']),
  };

  return (
    <div className={styles['posters-box']}>
      {posters && posters.length > 1 ? (
        <>
          <Swiper
            modules={[Thumbs, Pagination]}
            spaceBetween={10}
            pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 8 }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className={complexStyles.mainSwiper}
            data-test-id='slide-big'
          >
            {posters.map((poster, index) => (
              <SwiperSlide key={poster.url} virtualIndex={index} className={styles.swiper__slide}>
                <ProgressiveImage src={poster.url} alt='Постер книги' />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs, Mousewheel]}
            spaceBetween={10}
            slidesPerView={Math.min(5, posters.length)}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            mousewheel={true}
            className={complexStyles.subSwiper}
            data-test-id='slide-mini'
          >
            {posters.map((poster, index) => (
              <SwiperSlide key={poster.url} virtualIndex={index} className={styles.swiper__slide}>
                <ProgressiveImage src={poster.url} alt='Постер книги' />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className={styles['single-poster']}>
          <ProgressiveImage src={posters ? posters[0].url : default_poster} alt='Постер книги' />
        </div>
      )}
    </div>
  );
};
