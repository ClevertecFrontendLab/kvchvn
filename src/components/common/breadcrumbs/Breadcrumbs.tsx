import React from 'react';

import { Wrapper } from '../../global/wrapper';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  paths: Array<string | undefined>;
}

export const Breadcrumbs = ({ paths }: BreadcrumbsProps) => (
  <section className={styles.section}>
    <Wrapper>
      <p>
        {paths.map(
          (path, index) =>
            path && (
              <React.Fragment key={path}>
                {path}
                {index !== paths.length - 1 && <span>|</span>}
              </React.Fragment>
            )
        )}
      </p>
    </Wrapper>
  </section>
);
