import React, { useState } from 'react';
import classnames from 'classnames';

import default_poster from '../../../assets/svg/default_poster.svg';
import { BASE_API_URL } from '../../../constants';

import styles from './ProgressiveImage.module.scss';

interface ProgressiveImageProps {
  src?: string;
  alt: string;
}

export const ProgressiveImage = ({ src, alt }: ProgressiveImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const complexStyles = {
    imageBox: classnames(styles['image-box'], { [styles.loading]: !isImageLoaded }),
    image: classnames(styles.image, { [styles.hidden]: !isImageLoaded }),
  };

  const handleLoad = () => setIsImageLoaded(true);

  const handleError = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLImageElement;

    target.src = default_poster;
    setIsImageLoaded(true);
  };

  return (
    <div className={complexStyles.imageBox}>
      <img
        src={src ? `${BASE_API_URL}${src}` : default_poster}
        loading='lazy'
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={complexStyles.image}
      />
    </div>
  );
};
