import { ReactNode, memo } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import stars from './Stars.module.sass';
import animation from '../../styles/Animation.module.scss';

type HeaderProps = {
  children: ReactNode;
};

export const Header = memo(({ children }) => {
  return (
    <header className={`${styles.wrapper} ${animation.fadeInUp}`}>
      <div className={stars.starsWrapper}>
        <div className={stars.stars}></div>
        <div className={stars.stars2}></div>
        <div className={stars.stars3}></div>
        <Image
          src="/images/me.png"
          alt="simicoder"
          width="300"
          height="300"
          className={styles.heroImage}
          quality={100}
          priority
        />
      </div>

      <div className={styles.textWrapper}>
        <p className={styles.lp}>I{"'"}m Simon Popielarz</p>
        <p className={styles.rp}>I{"'"}m a Software Developer</p>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
