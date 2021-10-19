import { memo } from 'react';
import { LinkItem } from './Link/LinkItem';
import styles from './Links.module.scss';

export const Links = memo(() => {
  return (
    <ul className={styles.list}>
      <LinkItem title="@SimiCoder" href="/" />
      <LinkItem title="Projects" href="/projects" />
    </ul>
  );
});

Links.displayName = 'Links';
