import { memo } from 'react';
import { LinkItem } from './Link/LinkItem';
import styles from './Links.module.scss';
import stylesLink from './Link/LinkItem.module.scss';

export const Links = memo(() => {
  return (
    <ul className={styles.list}>
      <LinkItem title="@SimiCoder" href="/" />
      <li className={stylesLink.item}>
        <a className={stylesLink.link} href="#Projects">
          Projects
        </a>
      </li>
    </ul>
  );
});

Links.displayName = 'Links';
