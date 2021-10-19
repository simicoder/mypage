import { memo } from 'react';
import Link from 'next/link';
import styles from './LinkItem.module.scss';

type LinkItemProps = {
  title: string;
  href: string;
};

export const LinkItem = memo<LinkItemProps>(({ title, href }) => {
  return (
    <li className={styles.item}>
      <Link href={href}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  );
});

LinkItem.displayName = 'LinkItem';
