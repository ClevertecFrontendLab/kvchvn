import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from '../../global/wrapper';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  paths: Array<{ name?: string; path?: string }>;
}

export const Breadcrumbs = ({ paths }: BreadcrumbsProps) => (
  <section className={styles.section}>
    <Wrapper>
      <p>
        {paths.map(
          ({ name, path }, index) =>
            name && (
              <React.Fragment key={name}>
                {path ? <Link to={path}>{name}</Link> : name}
                {index !== paths.length - 1 && <span>|</span>}
              </React.Fragment>
            )
        )}
      </p>
    </Wrapper>
  </section>
);
