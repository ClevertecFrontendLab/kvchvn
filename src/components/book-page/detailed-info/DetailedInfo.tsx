import React from 'react';

import { BOOK_DETAILED_INFO_LABELS } from '../../../constants';
import { BookDetailsModified } from '../../../types';

import styles from './DetailedInfo.module.scss';

type DetailedInfoProps = {
  details: BookDetailsModified;
};

export const DetailedInfo = ({ details }: DetailedInfoProps) => (
  <ul className={styles['detailed-info-list']}>
    {Object.entries(BOOK_DETAILED_INFO_LABELS).map(([label, labelText]) => (
      <li key={label}>
        {details[label as keyof typeof details] && (
          <>
            <span>{labelText}</span>
            {details[label as keyof typeof details]}
          </>
        )}
      </li>
    ))}
  </ul>
);
