import { ReactNode, memo } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

type HeaderProps = {
  children: ReactNode;
};

export const Header = memo(({ children }) => {
  return (
    <header className={styles.wrapper}>
      <Image
        src="/images/me.png"
        alt="simicoder"
        width="300"
        height="300"
        className={styles.heroImage}
        quality={100}
        priority
      />
      <div className={styles.textWrapper}>
        <p className={styles.lp}>I`m Szymon Popielarz</p>
        <p className={styles.rp}>I`m a Software Developer</p>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
